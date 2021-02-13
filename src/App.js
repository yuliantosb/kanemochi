import React from "react";
import colors from "./constant/colors";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "./router";

const { width, height } = window.screen;

const GlobalStyles = createGlobalStyle`
  html {
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-stroke: ${colors.stroke};
    --color-active: ${colors.active};
    --color-black: ${colors.black};
    --width-navbar: ${width - 105}px;
    --height-content: ${height - 220}px;
    --color-sidebar: ${colors.sidebar};
    --color-background: ${colors.background};
    --width-half: ${width / 2}px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          {router.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact
                key={index}
                component={(props) => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              ></Route>
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
