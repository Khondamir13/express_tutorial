// // HTTP module bizga server yaratishga yordam beradi
const http = require("http");

// const server = http.createServer((request, response) => {
//   // Bunda code bilan biz server create qilamiz, bu callback function qabul qiladi uning 2 ta parametri bo'ladi
//   // request => serverga so'rov
//   // response => server javobi
//   console.log(request.url); //serverga sorav yubordik  javob kelmaganicha sayt kutib turadi
//   response.write("Hello"); // serverga javob qaytaryapmiz
//   response.end(); // javob qaytarilgandan keyin end() ni ishlatishimiz shart
// });

// server.listen(3000, () => {
//   // server yaratish uchun
//   console.log("Server 3000-portda ishga tushdi");
// });

// // Node yordamida Backend xizmatlarni qurishda http moduledan kamdan kam holatlarda foydalaniladi buning sababi loyihamizda route lar kop bolishi mumkin hamma route larni handle qilish bitta create\\server ichida bolib  qoladi
// // Uning o'rniga express  frameworkdan foydaliniladi

const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // console.log(req.method); // http methodlarini qaytaradi: GET,POST
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // Agar biz response qilib berilayotgan habarni qanaqa turdaligini aymasak, qandaydir bizga notanish bo'lgan datalar chiqib ketishi mumkin

  if (req.method === "GET") {
    if (req.url === "/") {
      // HTML file lar bilan va codelari bilan ishlash
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.end(data);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.end(data);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "contact.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.end(data);
        }
      );
    } else if (req.url === "/api/admin") {
      // Json format bilan ishlash
      res.writeHead(200, { "Content-Type": "text/json" });
      const admin = {
        name: "Xondamir",
        surname: "Xudayorov",
        job: "Backend Developer",
      };
      // Har doim server database lar bilan ishlayotganimizda json formatda yuborib json formatda malumotlarni qabul qilib olamiz
      res.end(JSON.stringify(admin)); // JSON formatga o'tkazish
    }
  } else if (req.method === "POST") {
    const body = [];
    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });
    req.on("end", () => {
      const message = body.toString().split("=")[1];

      res.end(`Name successfully added: ${message}`);
    });
  }
});

server.listen(3000, () => {
  console.log("Server has been started on port : 3000");
});
