// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "rescript-test/src/Test.mjs";

function elementContains(message, element, substring) {
  return Test.assertion(message, "elementContains", (function (textContent, substring) {
                return textContent.includes(substring);
              }), element.textContent, substring);
}

export {
  elementContains ,
  
}
/* Test Not a pure module */
