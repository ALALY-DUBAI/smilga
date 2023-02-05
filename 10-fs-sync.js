const {readFileSync, writeFileSync} = require("fs");
const path = require("path");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
const first2 = readFileSync(path.join(__dirname, "content", "second.txt"), "utf8");
console.log(`This first2 says: ${first2}`);


writeFileSync(path.join(__dirname, "content", "result-sync.txt"), `Here is the result : ${first}, ${second}`, {flag:"a"});