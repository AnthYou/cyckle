import { AppDispatch } from "..";
import { authActions } from "../slices/auth-slice";
import { messageActions } from "../slices/message-slice";
import { User } from "@/utils/interfaces";

const daysToMilliseconds = (days: number) => days * 24 * 60 * 60 * 1000;

const setToken = (token: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem(
    "lastLoginTime",
    new Date(Date.now()).getTime().toString()
  );
};

const getToken = () => {
  const now = new Date(Date.now()).getTime();
  // We use 7 days as we defined the token to expire after 7 days in config/devise.rb.
  const sevenDays = daysToMilliseconds(7);
  const lastLoginTime = localStorage.getItem("lastLoginTime");

  if (!lastLoginTime) {
    return;
  }

  const timeSinceLastLogin = now - parseInt(lastLoginTime, 10);

  if (timeSinceLastLogin < sevenDays) {
    return localStorage.getItem("token");
  }
};

const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
};

export interface Credentials {
  email: string;
  password: string;
}

export interface SignupParams {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    height: string;
    phone: string;
    password: string;
  };
}

export const signupUser = (formParams: SignupParams) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch("/api/v1/signup", {
        method: "POST",
        body: JSON.stringify(formParams),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const answer = await response.json();
        throw new Error(answer.status.message);
      }

      const token = response.headers.get("Authorization");

      if (!token) {
        throw new Error(
          "No authorization token provided by the response headers."
        );
      }

      const responseJson = await response.json();
      const user: User = responseJson.data;

      setToken(token);
      dispatch(
        authActions.login({
          token: token,
          currentUser: user,
        })
      );
    } catch (error) {
      if (typeof error === "string") {
        dispatch(messageActions.setMessage(error));
      } else if (error instanceof Error) {
        dispatch(messageActions.setMessage(error.message));
      }
    }
  };
};

export const loginUser = (credentials: Credentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: credentials }),
      });

      if (!response.ok) {
        const answer = await response.json();
        throw new Error(answer.error);
      }

      const token = response.headers.get("Authorization");

      if (!token) {
        throw new Error(
          "No authorization token provided by the response headers."
        );
      }

      const responseJson = await response.json();
      const user: User = responseJson.data;

      setToken(token);
      dispatch(authActions.login({ token: token, currentUser: user }));
    } catch (error) {
      if (typeof error === "string") {
        dispatch(messageActions.setMessage(error));
      } else if (error instanceof Error) {
        dispatch(messageActions.setMessage(error.message));
      }
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = getToken();

      if (!token) {
        return;
      }

      const response = await fetch("/api/v1/logout", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) {
        const answer = await response.json();
        throw new Error(answer.error);
      }

      removeToken();
      dispatch(authActions.logout());
    } catch (error) {
      if (typeof error === "string") {
        dispatch(messageActions.setMessage(error));
      } else if (error instanceof Error) {
        dispatch(messageActions.setMessage(error.message));
      }
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = getToken();

      if (!token) {
        return;
      }

      const response = await fetch("/api/v1/current_user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) {
        const answer = await response.json();
        throw new Error(answer.error);
      }

      const responseJson = await response.json();
      const user: User = responseJson.data;

      dispatch(authActions.login({ token: token, currentUser: user }));
    } catch (error) {
      console.log(error);
    }
  };
};
