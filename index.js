const express = require("express");
const hbs = require("hbs");
const path = require("path");
const morgan = require("morgan");
const app = express();
require("./src/db/conn");

const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));

app.set("views engine", "hbs");
app.set("views", path.join(__dirname, "./templates/views"));
hbs.registerPartials(path.join(__dirname, "./templates/partials"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Server is Listen at this ${PORT} number`));
