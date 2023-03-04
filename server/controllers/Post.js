const { Posts } = require("../models");

const { uploadImage } = require("../services/Posts/imageUpload");

const getAllPost = async (req, res) => {
  const postList = await Posts.findAll();

  res.json({ postList });
};

const createPost = async (req, res) => {
  const post = await req.body;
  console.log("🚀 ~ file: Post.js:11 ~ createPost ~ post:", post);

  const image = await uploadImage(req, res);

  post.UserId = req.user.id;
  post.image = image;

  await Posts.create(post);

  res.status(200).json({ message: "Create post success 🥳", post });
};

const getDetailImage = async (req, res) => {
  const id = req.params.publicId;

  if (!id)
    return res.status(400).json({ message: "Can not find your picture" });

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
  getDetailPost,
  postNewComment,
  getDetailImage,
};
