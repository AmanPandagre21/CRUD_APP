const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/usersData", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((e) => console.log(e));
