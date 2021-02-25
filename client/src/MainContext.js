import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { authenticate } from "./services/auth";

import theme from "./theme/mui_theme";

export const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState()
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    (async () => {
      const auth = await authenticate();
      if (auth) {
        setUser(auth.user);
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MainContext.Provider
      value={{
        authenticated,
        loading,
        user,
        setAuthenticated,
        setLoading,
        setUser,
      }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </MainContext.Provider>
  );
};

