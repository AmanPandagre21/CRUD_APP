const axios = require("axios");

exports.homeRoute = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/api/users");
    res.render("home", { users: response.data });
  } catch (error) {
    res.status(500).send(error || "Failed to find data");
  }
};

exports.addUserRoute = (req, res) => {
  res.render("addUser");
};

exports.updateUserRoute = async (req, res) => {
  try {
    const id = req.query.id;
    const response = await axios.get("http://localhost:3000/api/users", {
      params: { id: id },
    });
    console.log(response.data);
    res.render("updateUser", {
      users: response.data,
    });
  } catch (e) {
    res.status(500).send(error || "Failed to update data");
  }
};
