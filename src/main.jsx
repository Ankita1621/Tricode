import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import { Auth0Provider } from '@auth0/auth0-react';
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-gfezg5roecp5n3vy.us.auth0.com"
    clientId="0tiy0ChVZbMtxSFbFwF95cGMSkHnGxgC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>

  </Auth0Provider>
);