const { Posts } = require("../models");
const { uploadCloudinary } = require("../services/Posts/imageUpload");

const getAllPost = async (req, res) => {
  const postList = await Posts.findAll();

  res.json({ postList });
};

const createPost = async (req, res) => {
  const post = req.body;

  post.UserId = req.user.id;

  await Posts.create(post);

  res.json(post);
};

const uploadImage = async (req, res) => {
  try {
    res.setHeader("Content-Type", "multipart/form-data");

    if (req.file) {
      await uploadCloudinary(req.file.path);

      await res.status(200).json({ message: "File uploaded" });
    } else res.status(400).json({ message: "No file uploaded" });
  } catch (error) {
    console.log("🚀 ~ file: Posts.js:46 ~ router.post ~ error:", error);
  }
};

const getDetailImage = async (req, res) => {
  const id = req.params.publicId;

  if (!id)
    return res.status(400).json({ message: "Can not found your picture" });

  const url = await cloudinary.url(`${id}`, {
    width: 100,
    height: 150,
    Crop: "fill",
  });

  res.status(200).json({ image: `${url}` });
};

const getDetailPost = async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await Posts.findByPk(id);

  res.json(post);
};

const postNewComment = async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await Posts.findByPk(id);

  res.json(post);
};

module.exports = {
  getAllPost,
  createPost,
  uploadImage,
  getDetailPost,
  postNewComment,
  getDetailImage,
};
