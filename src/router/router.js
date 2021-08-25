const express = require("express");
const router = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

router.get("/", services.homeRoute);

router.get("/addUser", services.addUserRoute);

router.get("/updateUser", services.updateUserRoute);

// api Router
router.post("/api/adduser", controller.adduser);
router.get("/api/getusers", controller.getusers);

module.exports = router;
