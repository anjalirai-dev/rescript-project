// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Future from "rescript-future/src/Future.mjs";
import * as Router from "./shared/Router.mjs";
import * as Spacer from "./shared/Spacer.mjs";
import * as $$Request from "rescript-request/src/Request.mjs";
import * as AsyncData from "rescript-asyncdata/src/AsyncData.mjs";
import * as Css from "@emotion/css";
import * as ReactHelmet from "react-helmet";

var container = Css.css({
      fontFamily: "sans-serif",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      width: "100%",
      maxWidth: 600,
      margin: "auto"
    });

var actionButton = Css.css({
      borderStyle: "none",
      background: "hotpink",
      fontFamily: "inherit",
      color: "#fff",
      fontSize: 20,
      padding: 10,
      cursor: "pointer",
      borderRadius: 10,
      alignSelf: "center"
    });

var disabledButton = Css.cx([
      actionButton,
      Css.css({
            opacity: "0.3"
          })
    ]);

var results = Css.css({
      height: 200,
      backgroundColor: "#efefef",
      borderRadius: 10,
      width: "100%",
      padding: 10
    });

function fetchRobotsTxt(param) {
  return Future.flatMap($$Request.make(Router.publicPath + "robots.txt", undefined, /* Text */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined), true, (function (value) {
                return Future.make(function (resolve) {
                            var timeoutId = setTimeout((function (param) {
                                    return Curry._1(resolve, value);
                                  }), 1000);
                            return (function (param) {
                                      clearTimeout(timeoutId);
                                      
                                    });
                          });
              }));
}

function Robots(Props) {
  var fetchRobotsTxtOpt = Props.fetchRobotsTxt;
  var fetchRobotsTxt$1 = fetchRobotsTxtOpt !== undefined ? fetchRobotsTxtOpt : fetchRobotsTxt;
  var match = React.useState(function () {
        return /* NotAsked */0;
      });
  var setRobots = match[1];
  var robots = match[0];
  React.useEffect((function () {
          Curry._1(setRobots, (function (param) {
                  return /* Loading */1;
                }));
          var request = Curry._1(fetchRobotsTxt$1, undefined);
          Future.get(request, (function (payload) {
                  return Curry._1(setRobots, (function (param) {
                                return /* Done */{
                                        _0: payload
                                      };
                              }));
                }));
          return (function (param) {
                    return Future.cancel(request);
                  });
        }), [fetchRobotsTxt$1]);
  var tmp;
  if (typeof robots === "number") {
    tmp = null;
  } else {
    var match$1 = robots._0;
    if (match$1.TAG === /* Ok */0) {
      var match$2 = match$1._0;
      if (match$2.ok) {
        var robots$1 = match$2.response;
        tmp = robots$1 !== undefined ? React.createElement("pre", undefined, robots$1) : "An error occured";
      } else {
        tmp = "An error occured";
      }
    } else {
      tmp = "An error occured";
    }
  }
  return React.createElement(React.Fragment, undefined, React.createElement(ReactHelmet.Helmet, {
                  children: React.createElement("title", undefined, "Request demo")
                }), React.createElement("div", {
                  className: container
                }, React.createElement("button", {
                      className: AsyncData.isLoading(robots) ? disabledButton : actionButton,
                      disabled: AsyncData.isLoading(robots),
                      onClick: (function (param) {
                          Curry._1(setRobots, (function (param) {
                                  return /* Loading */1;
                                }));
                          return Future.get(Curry._1(fetchRobotsTxt$1, undefined), (function (payload) {
                                        return Curry._1(setRobots, (function (param) {
                                                      return /* Done */{
                                                              _0: payload
                                                            };
                                                    }));
                                      }));
                        })
                    }, typeof robots === "number" ? (
                        robots !== 0 ? "Loading …" : "Load robots.txt"
                      ) : "Reload robots.txt"), React.createElement(Spacer.make, {
                      height: "10px"
                    }), React.createElement("div", {
                      className: results
                    }, tmp)));
}

var make = Robots;

export {
  make ,
  
}
/* container Not a pure module */
