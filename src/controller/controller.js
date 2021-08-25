const Userinfo = require("../model/model");

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.send("form field cannot be empty");
    } else {
      const userData = new Userinfo({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address,
        status: req.body.status,
      });

      const result = await userData.save();
      res.send(result);
    }
  } catch (error) {
    res
      .status(500)
      .send(error || "some error happen while creating a create operation");
  }
};

exports.find = async (req, res) => {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const result = await Userinfo.findById(id);
      res.send(result);
    } else {
      const result = await Userinfo.find();
      res.send(result);
    }
  } catch (e) {
    res
      .status(500)
      .send(e || "some error happen while creating a find operation");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Userinfo.findByIdAndUpdate(id, req.body);
    res.status(200).send(result);
  } catch (e) {
    res
      .status(500)
      .send(e || "some error happen while creating a update operation");
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Userinfo.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (e) {
    res
      .status(500)
      .send(e || "some error happen while creating a delete operation");
  }
};
