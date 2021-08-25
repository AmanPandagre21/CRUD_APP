const mongoose = require("mongoose");
require("dotenv").config();
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: Number,
  gender: String,
  address: String,
  status: String,
});

const Userinfo = new mongoose.model("Userinfo", userSchema);

module.exports = Userinfo;
