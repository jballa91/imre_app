import React from 'react';
import { createBrowserHistory } from "history";
import { Box } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom"
import { makeStyles } from "@material-ui/styles";

import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js"

const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  window: {
    width: "100vw",

    height: "100%",
    margin: "0px",
    padding: "0px",
  },
  app: {},
  slipbop: {
    position: "static",
    zIndex: 3,
    width: "100%",
  },
}));

function App() {
  const styles = useStyles();
  return (
    <Box className={styles.window}>
      <BrowserRouter history={history}>
        <header className={styles.slipbop}>
          <NavBar />
        </header>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </Box>
  );
}

export default App;
