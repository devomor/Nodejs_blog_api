
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      trim: true,
    },
    like: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      // required:true,
      default: "avatar.png",
    },
    username: {
      type: String,
      trim: true,
      default: "admin",
    },
    category: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
