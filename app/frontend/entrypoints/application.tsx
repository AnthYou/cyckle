import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "../utils/theme";
import App from "@/components/App";
import store from "@/store/index";

import "./main.scss";

const domContainer = document.querySelector("#home") as HTMLElement;
const home = createRoot(domContainer);

home.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
