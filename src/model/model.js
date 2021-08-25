const mongoose = require("mongoose");
require("dotenv").config();
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: Number,
  address: String,
  gender: String,
  status: String,
});

const Userinfo = new mongoose.model("Userinfo", userSchema);

module.exports = Userinfo;
