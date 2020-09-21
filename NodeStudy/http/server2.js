const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    //req => request   객체 요청에 관한 정보들
    //res => response 객체 응답에 관한 정보들
    //응답요청 적기
    try {
      const data = await fs.readFile("./server2.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.mssage);
    }
  })
  .listen(5050, () => {
    //서버연결
    console.log("5050번 포트에서 서버 대기 중입니다!");
  });
