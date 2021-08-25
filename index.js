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
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./templates/views"));
hbs.registerPartials(path.join(__dirname, "./templates/partials"));

app.use(express.static(path.join(__dirname, "./public/")));
app.use(router);

app.listen(PORT, () => console.log(`Server is Listen at this ${PORT} number`));
