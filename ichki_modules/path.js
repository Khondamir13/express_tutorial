const path = require("path");

// console.log(path.basename(__filename)); // Hozir ishlab turgan faylning ozini ko'rsatadi yani => path.js ni
// console.log(path.dirname(__filename)); // shu faylgacha bo'lgan yo'nalishni korsatadi
// console.log(path.extname(__filename)); // shu faylning kengaytmasini ko'rsatib beradi yani => .js
// __filename ning orniga __dirname ni qo\yib yozib korsak ham bo'ladi, bunda faqat extname ishlamaydi chunki fayllarning extension ni bo'lmaydi
console.log(path.parse(__filename)); // mana shu faylga doir barcha malumotlarni bitta abject ga yig'ib qaytarib beradi
console.log(path.join(__dirname, "templates", "index.html"));
console.log(path.resolve(__dirname, "templates", "index.html")); // bu ikkalasi ham dirnamega yangi template degan folder ochib ichiga index.html degan fayl ochib beradi
