const express = require("express");
const hbs = require("hbs");
const path = require("path");
const morgan = require("morgan");
const router = require("./src/router/router");
const app = express();
require("./src/db/conn");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./templates/views"));
hbs.registerPartials(path.join(__dirname, "./templates/partials"));
hbs.registerHelper("ifCond", function (v1, operator, v2, options) {
  switch (operator) {
    case "==":
      return v1 == v2 ? options.fn(this) : options.inverse(this); // eslint-disable-line
    case "!=":
      return v1 != v2 ? options.fn(this) : options.inverse(this); // eslint-disable-line
    case "!==":
      return v1 !== v2 ? options.fn(this) : options.inverse(this);
    case "===":
      return v1 === v2 ? options.fn(this) : options.inverse(this);
    case "<":
      return v1 < v2 ? options.fn(this) : options.inverse(this);
    case "<=":
      return v1 <= v2 ? options.fn(this) : options.inverse(this);
    case ">":
      return v1 > v2 ? options.fn(this) : options.inverse(this);
    case ">=":
      return v1 >= v2 ? options.fn(this) : options.inverse(this);
    case "&&":
      return v1 && v2 ? options.fn(this) : options.inverse(this);
    case "||":
      return v1 || v2 ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
});

app.use("/css", express.static(path.resolve(__dirname, "./public/css")));
app.use("/js", express.static(path.resolve(__dirname, "./public/js")));
app.use(router);

app.listen(PORT, () => console.log(`Server is Listen at this ${PORT} number`));
