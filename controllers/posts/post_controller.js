const Post = require("../../models/post_model");
exports.createPost = async (req, res, next) => {
  const { title, description, comment, like, image, username, category } =
    req.body;
  try {
    const post = await Post.create({
      title,
      description,
      comment,
      like,
      image,
      username,
      category,
    });
    res.status(201).json({
      massage: "post successfully created",
      post,
    });
  } catch (error) {
    res.status(404).json({
      message: "post not create",
      error: error.message,
    });
  }
};
exports.getAllPost = async (req, res, next) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      massage: "all post successfully get",
      post,
    });
  } catch (error) {
    res.status(404).json({
      message: "post not found",
      error: error.message,
    });
  }
};
exports.updatePost = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const post = await Post.findById(userId);
    if (!post) {
      return res.status(400).json({
        massage: "wrong user!",
      });
    }

    const updatePost = await Post.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      massage: "post update successfully",
      updatePost,
    });
  } catch (error) {
    res.status(404).json({
      message: "post not update post",
      error: error.message,
    });
  }
};
exports.deletePost = async (req, res, next) => {
	 const userId = req.params.userId;
   try {
     const post = await Post.findById(userId);
     if (!post) {
       return res.status(400).json({
         massage: "wrong post!",
       });
     }

     const deletePost = await Post.findByIdAndDelete(userId);
     res.status(200).json({
       massage: "user delete successfully",
       deletePost,
     });
   } catch (error) {
     res.status(401).json({
       massage: "post not delete",
       error: error.message,
     });
   }
};
