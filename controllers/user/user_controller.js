const User = require('../../models/user_model')
exports.getAllUser = async (req, res, next) => {
	try {
		const user = await User.find();
		  res.status(200).json({
			  massege: "data get succesfully",
			  user,
      });
  } catch (error) {
    res.status(401).json({
      massege: "data not found",
      error: error.message,
    });
  }
};
