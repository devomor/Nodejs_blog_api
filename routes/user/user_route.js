const { getAllUser } = require("../../controllers/user/user_controller");
const { authMiddleware } = require("../../middlewares/auth_middleware");

const userRoute = require("express").Router();
userRoute.get("/",authMiddleware, getAllUser);
module.exports = userRoute;
