type window
@val external window: window = "window"
@get @uncurry external getScreen: (window) => {..} = "screen"

let screen = getScreen(window)
let height = screen["height"]
let width = screen["width"]


open CssJs

let black = CssJs.black
let white = CssJs.white

let primaryBlue = "005EB8"->hex
let digitalBlue = "0870D8"->hex
let digitalBlueLight10 = "E5F0FB"->hex
let accentBlue = "59CBE8"->hex
let accentGreen = "00BF6F"->hex
let accentOrange = "FE5000"->hex
let accentYellow = "FFC72C"->hex

let primaryGray = "707070"->hex
let grayLight = "B1B3B3"->hex
let grayLight10 = "E8E8E8"->hex
let grayLight10Alt = "E8E9ED"->hex
let grayLightBorder = "E1E4E8"->hex
let grayLightBackground = "9E9E9E5C"->hex
let lightGreen = "0080003D"->hex
let accordionBorder = "8080802e"->hex
let plusIconUrl = #url("icons/plus-icon.svg")

let domainButton = selected => {
  switch selected {
  | true =>
    style(. [
      backgroundColor(digitalBlueLight10),
      color(black),
      hover([backgroundColor(digitalBlueLight10), color(digitalBlue)]),
      padding(1.0->ex),
      cursor(#pointer),
    ])
  | false =>
    style(. [
      backgroundColor(white),
      color(digitalBlue),
      hover([backgroundColor(grayLight10Alt), color(black)]),
      padding(1.0->ex),
      cursor(#pointer),
    ])
  }
}