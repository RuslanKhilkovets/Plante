import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.ts";

import App from "./App.tsx";

import "./index.css";
import "./nullstyle.css";

import { setupStore } from "./redux/store.ts";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
		<Provider store={store}>
			<SnackbarProvider 
				maxSnack={3} 
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				autoHideDuration={1000} 
			>
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</BrowserRouter>
			</SnackbarProvider>
		</Provider>
  </React.StrictMode>
);