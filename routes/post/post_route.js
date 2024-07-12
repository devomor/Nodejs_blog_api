const { createPost, updatePost, getAllPost, deletePost } = require("../../controllers/posts/post_controller");
const { authMiddleware } = require("../../middlewares/auth_middleware");

const postRoute = require("express").Router();
postRoute.post("/create",authMiddleware,createPost);
postRoute.get("/get-all-post",authMiddleware,getAllPost);
postRoute.put("/:postId", authMiddleware, updatePost);
postRoute.delete("/:postId", authMiddleware, deletePost);
module.exports = postRoute;
