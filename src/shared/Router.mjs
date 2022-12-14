// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.mjs";

var publicPath = Belt_Option.getWithDefault(process.env.PUBLIC_PATH, "/");

function makeHref(param) {
  return (publicPath + "/" + param).replace(/:\/\//g, "__PROTOCOL__").replace(/\/+/g, "/").replace(/__PROTOCOL__/g, "://");
}

function stripInitialPath(_path, _sourcePath) {
  while(true) {
    var sourcePath = _sourcePath;
    var path = _path;
    if (!path) {
      return path;
    }
    if (!sourcePath) {
      return path;
    }
    if (path.hd !== sourcePath.hd) {
      return path;
    }
    _sourcePath = sourcePath.tl;
    _path = path.tl;
    continue ;
  };
}

function pathParse(str) {
  switch (str) {
    case "" :
    case "/" :
        return /* [] */0;
    default:
      var raw = str.slice(1);
      var match = raw[raw.length - 1 | 0];
      var raw$1 = match === "/" ? raw.slice(0, -1) : raw;
      var match$1 = raw$1.split("?", 2);
      var raw$2 = match$1.length !== 2 ? raw$1 : match$1[0];
      return Belt_List.fromArray(raw$2.split("/").filter(function (item) {
                      return item.length !== 0;
                    }));
  }
}

function useUrl(serverUrl, param) {
  var url = RescriptReactRouter.useUrl(serverUrl, undefined);
  return React.useMemo((function () {
                return {
                        path: stripInitialPath(url.path, pathParse(publicPath)),
                        hash: url.hash,
                        search: url.search
                      };
              }), [url]);
}

function push(url) {
  return RescriptReactRouter.push(makeHref(url));
}

function replace(url) {
  return RescriptReactRouter.replace(makeHref(url));
}

export {
  publicPath ,
  makeHref ,
  useUrl ,
  push ,
  replace ,
  
}
/* publicPath Not a pure module */
