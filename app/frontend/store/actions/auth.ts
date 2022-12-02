import { AppDispatch } from "..";
import { authActions } from "../slices/auth-slice";

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
}

export interface Credentials {
  email: string;
  password: string;
}

export const signupUser = (credentials: Credentials) => {
  // TO DO
  // return (dispatch: AppDispatch) => {
  //   return fetch("/api/v1/signup", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ user: credentials })
  //   }).then((res) => {
  //     if (res.ok) {
  //       setToken(res.headers.get("Authorization")!);
  //       return res
  //         .json()
  //         .then((userJson) =>
  //           dispatch({ type: AUTHENTICATED, payload: userJson })
  //         );
  //     } else {
  //       return res.json().then((errors) => {
  //         dispatch({ type: NOT_AUTHENTICATED });
  //         return Promise.reject(errors);
  //       });
  //     }
  //   });
  // };
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
        throw new Error("Something went wrong");
      }

      const token = response.headers.get("Authorization");

      if (!token) {
        throw new Error(
          "No authorization token provided by the response headers."
        );
      }

      setToken(token);
      dispatch(authActions.login(token));
    } catch (error) {
      console.log(error);
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
        throw new Error("Something went wrong");
      }

      removeToken();
      dispatch(authActions.logout());
    } catch (error) {
      console.log(error);
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
        throw new Error("Something went wrong");
      }
    
      dispatch(authActions.login(token));
    } catch (error) {
      console.log(error);
    }
  };
};
