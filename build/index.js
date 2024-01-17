"use strict";

var _hello = _interopRequireDefault(require("./hello.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var arr = Array.from("HELLO");
arr.map(function (ch) {
  return console.log(ch);
});
var myname = "jin";
var age = 25;
var person = {
  newname: myname,
  age: age
};
var newname = person.newname;
var str = (0, _hello.default)();
console.log(str);
var message = document.createTextNode("Webpack Example");
document.body.appendChild(message);