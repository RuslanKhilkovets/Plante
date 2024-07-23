import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.ts";

import App from "./App.tsx";

import "./index.css";
import "./nullstyle.css";
import { Provider } from "react-redux";

// const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider> */}
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
