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
  const { username, category } = req.query;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        category: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({
      massage: "all post successfully get",
      posts,
    });
  } catch (error) {
    res.status(404).json({
      message: "post not found",
      error: error.message,
    });
  }
};
exports.updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({
        massage: "wrong user!",
      });
    }

    const updatePost = await Post.findByIdAndUpdate(postId, req.body, {
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
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({
        massage: "wrong post!",
      });
    }

    const deletePost = await Post.findByIdAndDelete(postId);
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
