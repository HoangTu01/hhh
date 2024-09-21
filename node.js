// import hello from "./hello.js"; // Only import hello once
import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("end",(number,a)=>{
    console.log("hello event Emiter ??");
})
eventEmitter.emit("end");
const hostname = "127.0.0.1";
const port = 3000;
// const note = "/user/joe/notes.txt";
// let name = "data.txt";
// let foler = "public";
// let a = path.join(foler, name);
// fs.readFile("./data.txt", "utf8", function (err, data) {
//   console.log(data);
// });
// let data = fs.readFileSync("./data.txt", "utf8"); // Sync read
// console.log(data);

// console.log(a);
// hello();
fs.writeFileSync("./data.txt", "utf8", function (err) {
  console.log(err);
}); // Write
console.log("and ??");
http
  .createServer((request, response) => {
    response.write("<h1>Hello + World!</h1>");
    response.end();
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// const server = createServer((req, res) => {
//   res.end("<h1>hello</h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const { exec } = require("child_process");

// exec("npm init -y", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Lỗi khi chạy npm init: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`Cảnh báo: ${stderr}`);
//     return;
//   }

//   console.log(`Kết quả: ${stdout}`);
// });
function getData(callback) {
  setTimeout(() => {
      console.log('Introduced');
      callback('Hoàng Ngọc Tú');
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
      console.log('Ten:', data);
      callback('ST22B');
  }, 1000);
}

function saveData(processedData, callback) {
  setTimeout(() => {
      console.log('Lop:', processedData);
      callback();
  }, 1000);
}



getData(function(data) {
  processData(data, function(processedData) {
      saveData(processedData, function(saveData) {
        console.log('Chay xong');
      });
  });
});