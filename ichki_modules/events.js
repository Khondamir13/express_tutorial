// Malumotlarni userga ko'rsatish
const Events = require("events");

// Samar Baddridinovdan
// Buni ishlatishimiz uchun class yaratishimiz kerak shuning uchun uni bosh harflar bilan chaqiramiz
// Keyin Classni vorislab olishimiz kerak Eventsdan

// class Logger extends Events {
//   log(a, b) {
//     this.emit("calculate", a + b);
// }

// const logger = new Logger();
// // on methodini har doim functionni chaqirishdan oldin chaqirishimiz kerak ekan
// logger.on("calculate", (data) => {
//   // eventni razvedka qilib turadi, agar event ishga tushsa, bu ham ishga tushadi va kerakli malumotni chiqarib beradi
//   console.log(data);
// });
// logger.log(70, 8); // functionni ishga tushirishimz bilan on dagi console ishga tushadi
// logger.log(7, 8);

// YOU tube channel
// we can use eventEmmiter to create custom events and then react to those events when they are emitted
let myEmitter = new Events.EventEmitter(); // constructor

// we are reacting to an event being emitted on this element
// myEmitter.on("someEvent", (massage) => {
//   // bu yerda shu event emit bo'lishi kuzatilyapti , emit bo'lishi bilan ishga tushyapti
//   // when this event occurs when it omits then , we want to do something and that;s going to be in fuction
//   console.log(massage);
// });

// myEmitter.emit("someEvent", "hello"); // someEvent emit qilinyapti

// const util = require("util");

// const Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, Events.EventEmitter); // bu yerda har bir yaratilayotgan peronga event berish imkoiyati meros qilib berilyapti

// const james = new Person("james");
// const mary = new Person("mary");
// const ryu = new Person("ryu");

// // Har bir personga event berish jarayoni
// const people = [james, mary, ryu];

// people.forEach((person) => {
//   person.on("speak", function (mssg) {
//     console.log(person.name + "said" + mssg);
//   }); // qachonki speak event ni emit qilsak console log ishlaydi
// });
// james.emit("speaek", "hey dudes");
// mary.emit("speak", "hello");
// ryu.emit("speak", "Hi");

// Farhod Dadajanov
// custom eventlar yozish uchun eventEmitterdan foydalanamiz
const EventEmitter = require("events"); // bu hozi class ko'rinishida bolganligi uchun uni bir o'zgaruvchiga olib olishimiz kerak object qilib new yordamida
const emitter = new EventEmitter();

// Sharti bo'yicha listeneri emit functionidan oldin yozilishi kerak
emitter.on("messageLogged", (data) => {
  // emit ogohlantirganda, bu listenerning ichidagi function ishga tushib ketadi, bu listenersiz hech narsa qilib bolmaydi, chunki hodisa emit bolganda nima ish bajarilishi kerak ekanligi shu yerda yoziladi
  console.log("Listener chaqirildi.", data);
});

emitter.emit("messageLogged", { id: 1, url: "http://..." }); // bu emit hususiyati dastur bo'yicha messageLogged eventi ishga tushirilganini habar beradi, habar berayotganda, uning listeneriga qandaydir malumotlarni yuborishimiz ham mumkin

// Real projectlarda Class dan foydalanamiz boshidagi ko'rinishda !!!
