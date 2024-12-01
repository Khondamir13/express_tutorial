import express from "express";
import Joi from "joi";
const app = express();
app.use(express.json()); // bodydagi datani json formatda o'qib berishga yordam beradigan middleware

const books = [
  {
    id: 1,
    name: "rich dad poor dad",
  },
  {
    id: 2,
    name: "good to great",
  },
  {
    id: 3,
    name: "the war of art",
  },
];
// urlga get so'rovi yuborilganda ichidagi callback function ishga tushadi
// app.get("/", (req, res) => {
//   res.send("Salom");
// });

// app.get("/api/books", (req, res) => {
//   res.send(books);
// });

// Route Parametrlari

// kitoblarni id orqali olish
// so'rov => api/books/1 bo'lgan holatda ishlidi
// app.get("/api/books/:id", (req, res) => {
//   // req.params object hisoblnadi
//   const book = books.find((b) => b.id === parseInt(req.params.id));
//   if (!book) {
//    return res.status(404).send("Bu ID ga teng bo'lgan kitob topilmadi");
//   }
//   res.send(book);
// });

// // so'rov => films/2019/11 shunga o'xshash bir nechta so'rovlar yuborilsa
// app.get("api/articles/:year/:month", (req, res) => {
//   res.send(req.params);
//   // result => object qayradi uning year va month degan qiymatlari boladi
// });

// // Query string

// // Route parametrlar yordamida backenddan asosiy malumot oliniladi
// // Query so'rovlardan esa qo'shimcha narsa so'rash uchun foydalaniladi, sort yokida filter => ..?sortBy=name shunga o'xshash ko'rinishda bo'ladi
// app.get("api/articles/:year/:month", (req, res) => {
//   res.send(req.query);
// });

// POST methodi

// app.post("/api/books", (req, res) => {
//   // Validation
//   // validation qilish uchun Joi dan foydalanamiz
//   const bookSchema = {
//     name: Joi.string().required().min(3),
//   };
//   const result = Joi.validate(req.body, bookSchema);
//   if (result.error) {
//     return res.status(400).send(result.error.details[0].message);
//   }
//   const book = {
//     id: books.length + 1,
//     // body qismidan json fotmatda datani oqib olish uchun middleware kerak boladi
//     name: req.body.name,
//   };

//   books.push(book);
//   res.status(201).send(book);
// });

// // PUT
// app.put("/api/books:id", (req, res) => {
//   // kitobni topish
//   const book = books.find((b) => b.id === parent(req.params.id));
//   if (!book) {
//     return res.status(404).send("Berilgan IDga teng kitob topilmadi");
//   }

//   // yangi datani validate qilish
//   const bookSchema = {
//     name: Joi.string().required().min(3),
//   };
//   const result = Joi.validate(req.body, bookSchema);
//   if (result.error) {
//     return res.status(400).send(result.error.details[0].message);
//   }

//   book.name = req.body.name;
//   // yangilangan datani qaytarib berish

//   res.send(book);
// });

// DELETE
app.delete("/api/books/:id", (req, res) => {
  // kitobni topib olish
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Berilgan ID ga teng kitob topilmadi");

  // topilsa ochirib tashlash
  const bookIndex = books.indexOf(book);
  books.splice(bookIndex, 1);

  // topilgan kitobni qaytarib berish
  res.send(book);
});

const PORT = process.env.PORT || 4100;
// 4100 da serverni ishga tushirish
app.listen(PORT, () => console.log(`Server is running on port :  ${PORT}`));
