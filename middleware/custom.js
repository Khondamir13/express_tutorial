function logger(req, res, next) {
  // 3ta parametri bo'ladi
  console.log("Logger");
  next(); // bu keyingi middlewarening ishlashiga ruxsat beradi desak ham bo'ladi
} // middlewarelar asosiy faylda bo'lmasligi kerak

export default logger;
