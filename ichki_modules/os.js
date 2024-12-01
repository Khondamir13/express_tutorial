// Operation system . => kampiyuterlarimiz haqida  malumotlarini yig'ib beeradi
const os = require("os");

// platform
console.log(os.platform()); // qaysi sistemadan kirayotganimizni korsatib beradi

//information about own computer
console.log(os.cpus());

// architecture
console.log(os.arch());

//  free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// entry point  // kirish nuqtasi
console.log(os.homedir());
