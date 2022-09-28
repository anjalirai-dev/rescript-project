// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Assert from "./utils/Assert.mjs";
import * as Robots from "../src/Robots.mjs";
import * as Deferred from "rescript-future/src/Deferred.mjs";
import * as ReactTest from "./utils/ReactTest.mjs";
import * as ReactDom from "react-dom";
import * as TestUtilsJs from "react-dom/test-utils.js";

ReactTest.testWithReact("Robots renders", (function (container) {
        var match = Deferred.make(undefined);
        var resolve = match[1];
        var future = match[0];
        var fetchRobotsTxt = function (param) {
          return future;
        };
        TestUtilsJs.act(function (param) {
              ReactDom.render(React.createElement(Robots.make, {
                        fetchRobotsTxt: fetchRobotsTxt
                      }), container);
              
            });
        Assert.elementContains("Renders loading", container, "Loading");
        TestUtilsJs.act(function (param) {
              return Curry._1(resolve, {
                          TAG: /* Ok */0,
                          _0: {
                            status: 200,
                            ok: true,
                            response: "My mock response",
                            xhr: {}
                          }
                        });
            });
        return Assert.elementContains("Renders received payload", container, "My mock response");
      }));

export {
  
}
/*  Not a pure module */
