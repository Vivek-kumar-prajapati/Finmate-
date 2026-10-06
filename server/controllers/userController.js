const User = require("../database/userInfo");

function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const isEmailExsist = User.find((item) => item.email == email);
    if (!isEmailExsist) {
      if (name && email && password) {
        User.push({ name, email, password });

        res.status(201).json({
          message: "User registration successfull",
          register: "true",
        });
      } else {
        res.status(201).json({
          message: "User registration successfull",
          register: "flase",
        });
      }
    } else {
      res.status(201).json({
        message: "User alresdy  exsist",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Unable to register user ",
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const userExsist = User.find((item) => item.email == email);

    if (userExsist) {
      res.status(201).json({
        message: " Login Successfull ",
        login: true,
      });
    } else {
      res.status(201).json({
        message: " Please register first ",
        login: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Unable to login user ",
      error: error.message,
    });
  }
}

function getAllUser(req, res) {
  res.status(200).json({
    message: "this is the data of all users ",
    data: User,
  });
}

module.exports = { registerUser, loginUser, getAllUser };
