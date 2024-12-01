// File system lar bilan ishlash
// Bu mavzunng path bo'limiga alaqadorligi bor
const fs = require("fs");
const path = require("path");

// fs da nimadir ishlatmoqchi bo'lsak sync i borini ishlatmaymiz, chunki u sinhron ravishda ishlaydi, o'zini ishlatsak u async yani asinhron ravishda ishlaydi

// fs.mkdirSync() // sync
// fs.mkdir(path.join(__dirname, "templates"), (err) => {
//   // mkdir yordamida yangi fayl ocamiz
//   if (err) throw new Error();

//   console.log("Folder was created succesfully");
// });

fs.writeFile(
  // bu 4 ta parametr qabul qiladi, path,data,optinal,fuction(err)
  path.join(__dirname, "templates", "december.txt"), // templates degan faylga december.txt degan fayl qoshilishi
  "Create new course NodeJS",
  (err) => {
    if (err) throw new Error();

    console.log("File was created successfully");

    fs.appendFile(
      // 3 ta parametr qabul qiladi: path,new data,function(err)
      path.join(__dirname, "templates", "december.txt"), // o'zgartirmoqchi bo'lgan filimizning directoriyasini anniq qilib berishimiz kerak
      " and microservice project",
      (err) => {
        if (err) throw new Error();

        console.log("File was changed easily");

        // readFile() bizga data qaytarib beradi u buffer ko'rinishida bo'ladi yani sonlarda ifodalangan bo'ladi
        // buffer kealyotgan malumotlarni hajmini kichraytirgan halatda saqlaydi. databazada buffer halatda saqlaymiz, userga esa malumot ko'rinishida qaytaramiz

        fs.readFile(
          path.join(__dirname, "templates", "december.txt"),
          "utf-8",
          (err, data) => {
            if (err) throw new Error();
            // ikkinchi yo'li optindan foydalanish => 'utf-8'
            // console.log(Buffer.from(data).toString()); // kelayotgan buffer malumotni malumot ko'rinishida otkazishning birinchi yoli
            console.log(data);
          }
        );
      }
    );
  }
); // File create qilishdan oldin uning folderi ochilgan yoki yoqligiga e'tibor berish kerak
