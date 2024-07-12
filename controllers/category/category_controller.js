const Category = require('../../models/category_model');

exports.createCategory = async (req, res, next) => {
  const { name} =
    req.body;
  try {
    const category = await Category.create({
      name,

    });
    res.status(201).json({
      massage: "post successfully created",
      category,
    });
  } catch (error) {
    res.status(404).json({
      message: "post not create",
      error: error.message,
    });
  }
};