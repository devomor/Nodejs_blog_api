const User = require("../../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { name, username, email, password, profile } = req.body;
    const user = await User.create({
      name,
      username,
      email,
      password,
      profile,
    });
    res.status(201).json({
      message: `hello ${name} you account create`,
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "something is wrong",
      error: error.message,
    });
  }
};

exports.logIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
	  if (!user) {
      return res.status(401).json({
        message: "wrong cedential",
      });
	  }
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      return res.status(400).json({
        message: "password dosenot match!",
      });
    }
    const token = jwt.sign(
      { username, _id: user._id },
      process.env.PRIVATE_KEY,
      { expiresIn: "2h" }
	);
	  res.status(201).json({
		  message: "login succesfull",
		  user,
		  token,
	  });
  } catch (error) {
    res.status(404).json({
      message: "not found",
      error: error.message,
    });
  }
};
