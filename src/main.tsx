import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RouterApp from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Toaster />
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <GoogleOAuthProvider clientId="683767475115-u0p148sqn4lbs78gj7q6gqre2ogo0m4i.apps.googleusercontent.com">
            <AuthProvider>
                <RouterApp />
            </AuthProvider>
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
