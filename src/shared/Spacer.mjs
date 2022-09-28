// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Spacer(Props) {
  var widthOpt = Props.width;
  var heightOpt = Props.height;
  var width = widthOpt !== undefined ? widthOpt : "10px";
  var height = heightOpt !== undefined ? heightOpt : "10px";
  return React.createElement("div", {
              style: {
                height: height,
                width: width,
                flexGrow: "0",
                flexShrink: "0"
              }
            });
}

var make = Spacer;

export {
  make ,
  
}
/* react Not a pure module */
