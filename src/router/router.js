const express = require("express");
const router = express.Router();
const services = require("../services/render");

router.get("/", services.homeRoute);

router.get("/addUser", services.addUserRoute);

router.get("/updateUser", services.updateUserRoute);

module.exports = router;
