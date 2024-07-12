const User = require("../../models/user_model");
const bcrypt = require("bcrypt");
//get all user
exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({
      massage: "data get succesfully",
      user,
    });
  } catch (error) {
    res.status(401).json({
      massege: "data not found",
      error: error.message,
    });
  }
};

// update profile user
exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        massage: "wrong user!",
      });
    }
   // req.body.password = await bcrypt.hash(req.body.password, 11);
    const updateUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      massage: "user update successfully",
      updateUser,
    });
  } catch (error) {
    res.status(401).json({
      massage: "user not update",
      error: error.message,
    });
  }
};
