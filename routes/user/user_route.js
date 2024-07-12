const { getAllUser, updateUser, userDelete } = require("../../controllers/user/user_controller");
const { authMiddleware } = require("../../middlewares/auth_middleware");

const userRoute = require("express").Router();
userRoute.get("/get-all-user",authMiddleware, getAllUser);
userRoute.put("/:userId",authMiddleware,updateUser);
userRoute.delete("/:userId",authMiddleware,userDelete);
module.exports = userRoute;
