const http = require("http");

const server = http.createServer((req, res) => {
  //req => request   객체 요청에 관한 정보들
  //res => response 객체 응답에 관한 정보들
  //응답요청 적기

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node!</h1>");
  res.end("<p>Hello Server!</p>");
});

server.listen(5050);

server.on("listening", () => {
  console.log("5050번 포트에서 서버 대기 중입니다.");
});

server.on("error", (error) => {
  console.error(error);
});
