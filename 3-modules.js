// Common Js , every file is module (by default)
// Modules Encapsulated Code (only share minimum)

const { john, peter } = require("./4-names.js");



const names = require("./4-names.js");
console.log(names);
const {sayHi} = require("./5-utils")

sayHi("Susan");
sayHi (john);
sayHi (peter);