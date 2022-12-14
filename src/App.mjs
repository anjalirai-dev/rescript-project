// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Home from "./Home.mjs";
import * as React from "react";
import * as Footer from "./Footer.mjs";
import * as Header from "./Header.mjs";
import * as Robots from "./Robots.mjs";
import * as Router from "./shared/Router.mjs";
import * as ErrorPage from "./ErrorPage.mjs";
import * as ReactDom from "react-dom";
import * as Css from "@emotion/css";
import * as ReactHelmet from "react-helmet";

Css.injectGlobal("\nhtml {\n  padding: 0;\n  margin: 0;\n  height: -webkit-fill-available;\n  font-family: sans-serif;\n}\nbody {\n  padding: 0; \n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: -webkit-fill-available;\n}\n#root {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1\n}");

function App$App(Props) {
  var url = Router.useUrl(undefined, undefined);
  React.useEffect((function () {
          window.scrollTo(0, 0);
          
        }), [url.path]);
  var match = url.path;
  var tmp;
  tmp = match ? (
      match.hd === "robots" ? (
          match.tl ? React.createElement(ErrorPage.make, {
                  text: "Not found"
                }) : React.createElement(Robots.make, {})
        ) : React.createElement(ErrorPage.make, {
              text: "Not found"
            })
    ) : React.createElement(Home.make, {});
  return React.createElement(React.Fragment, undefined, React.createElement(ReactHelmet.Helmet, {
                  defaultTitle: "ReScript React Starter Kit",
                  titleTemplate: "%s - ReScript React Starter Kit"
                }), React.createElement(Header.make, {}), tmp, React.createElement(Footer.make, {}));
}

var root = document.querySelector("#root");

if (root == null) {
  console.error("Missing #root element");
} else {
  ReactDom.render(React.createElement(App$App, {}), root);
}

export {
  
}
/*  Not a pure module */
