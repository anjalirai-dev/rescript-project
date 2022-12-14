// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CssJs from "bs-css-emotion/src/CssJs.mjs";

var screen = window.screen;

var height = screen.height;

var width = screen.width;

var primaryBlue = CssJs.hex("005EB8");

var digitalBlue = CssJs.hex("0870D8");

var digitalBlueLight10 = CssJs.hex("E5F0FB");

var accentBlue = CssJs.hex("59CBE8");

var accentGreen = CssJs.hex("00BF6F");

var accentOrange = CssJs.hex("FE5000");

var accentYellow = CssJs.hex("FFC72C");

var primaryGray = CssJs.hex("707070");

var grayLight = CssJs.hex("B1B3B3");

var grayLight10 = CssJs.hex("E8E8E8");

var grayLight10Alt = CssJs.hex("E8E9ED");

var grayLightBorder = CssJs.hex("E1E4E8");

var grayLightBackground = CssJs.hex("9E9E9E5C");

var lightGreen = CssJs.hex("0080003D");

var accordionBorder = CssJs.hex("8080802e");

function domainButton(selected) {
  if (selected) {
    return CssJs.style([
                CssJs.backgroundColor(digitalBlueLight10),
                CssJs.color(CssJs.black),
                CssJs.hover([
                      CssJs.backgroundColor(digitalBlueLight10),
                      CssJs.color(digitalBlue)
                    ]),
                CssJs.padding(CssJs.ex(1.0)),
                CssJs.cursor("pointer")
              ]);
  } else {
    return CssJs.style([
                CssJs.backgroundColor(CssJs.white),
                CssJs.color(digitalBlue),
                CssJs.hover([
                      CssJs.backgroundColor(grayLight10Alt),
                      CssJs.color(CssJs.black)
                    ]),
                CssJs.padding(CssJs.ex(1.0)),
                CssJs.cursor("pointer")
              ]);
  }
}

var black = CssJs.black;

var white = CssJs.white;

var plusIconUrl = {
  NAME: "url",
  VAL: "icons/plus-icon.svg"
};

export {
  screen ,
  height ,
  width ,
  black ,
  white ,
  primaryBlue ,
  digitalBlue ,
  digitalBlueLight10 ,
  accentBlue ,
  accentGreen ,
  accentOrange ,
  accentYellow ,
  primaryGray ,
  grayLight ,
  grayLight10 ,
  grayLight10Alt ,
  grayLightBorder ,
  grayLightBackground ,
  lightGreen ,
  accordionBorder ,
  plusIconUrl ,
  domainButton ,
  
}
/* screen Not a pure module */
