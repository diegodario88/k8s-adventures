import { createServer } from "node:http";

const hostname = "0.0.0.0";
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("You have reached sample app\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
