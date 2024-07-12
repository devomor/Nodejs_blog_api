const { getAllUser } = require("../../controllers/user/user_controller");

const userRoute = require("express").Router();
userRoute.get("/", getAllUser);
module.exports = userRoute;
