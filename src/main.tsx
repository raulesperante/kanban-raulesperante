import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { Theme } from "./config/theme.tsx";
import { store } from "./config/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
