const Userinfo = require("../model/model");
const userInfo = require("../model/model");

exports.adduser = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send();
      return;
    } else {
      const data = new userInfo({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address,
        status: req.body.status,
      });

      const result = await data.save();
      res.redirect("/addUser");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getusers = async (req, res) => {
  try {
    const userdata = await userInfo.find();
    res.send(userdata);
  } catch (error) {
    res.status(400).send(error);
  }
};
