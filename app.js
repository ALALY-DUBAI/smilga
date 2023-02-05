const http =  require("http");

const server = http.createServer((req, res) => {
if(req.url === "/") {
  res.end("Welcome to our Home page");
} else if(req.url === "/about") {
  res.end("Welcome to our ABOUT page");
} else {
  res.end(`<h1>Oops !</h1>
  <p>The page you are looking for is not found</p>
  <a href="/">HOME</a>`);
}
});



server.listen(5000, (err) => {
console.log("Server listening on port 5000");
});