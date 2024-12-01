// express js da middleware deganda middleware function nazarda tutiladi
// Middleware function shunday funksiyaki, request obyeti bilan ishlaydi va uning ustida kerakli ishlarni qiladi, agar hohlasa javobni srazi qaytarib beradi hohlasa, javobni yubormasdan ishlashni  keyingi middlewareni

import express from "express";
import logger from "./custom";
const app = express();
// json(), urlencoded(), static() bular built-in middlewarelar hisoblanadi yani o'zida bor
app.use(express.json()); // bu ham middleware hisoblanadi, bu sorovni olib formatini json formatga ogirib beradi va keyingi middlewarega ishlashni topshiradi javob qaytarib bermaydi=> buni request processing pipe line deyiladi
app.use(express.urlencoded({ extended: true })); // serverga kelgan req.bodysini urlencoded formatga parse qilish uchun kerak boladi, yani html formatni to'ldirib serverga post qilganda
app.use(express.static("public")); // papka nomi beriladi, bu yordamda serverga yozgan node dasturlarida static filelarni ham hosting qilishimiz mumkin
app.use(logger);
app.get("/", (req, res) => {
  // bu route handler functioni ham middleware hisoblanadi va bu javobni qaytarib beradi
});

// kerakli paytda ozimiz ham custom middleware yozishimiz va uni request processing pipe linega kirgizib yuborishimiz mumkin

// yana third part  middlewarelar => helmet() va morgan(), bularni ishlatish uchun birinchi yuklab olishimiz kerak

// helmet() bizga dasturimizni xavfsiz ishlashiga yordam beradi/ turli xil responselarga maxsus headerlar yozib beradi
// morgan() dasturimizda log yozish ammalga oshiriladi ichiga qaysi formatligi yoziladi
