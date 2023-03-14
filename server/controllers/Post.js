const { Posts, Likes } = require("../models");

const { uploadImage } = require("../services/Posts/imageUpload");

// get all post
const getAllPost = async (req, res) => {
  const postList = await Posts.findAll();

  res.json({ postList });
};

// create new post
const createPost = async (req, res) => {
  const post = await req.body;

  const image = await uploadImage(req, res);

  post.UserId = req.user.id;
  post.image = image;

  await Posts.create(post);

  res.status(200).json({ message: "Create post success 🥳", post });
};

// get detail post's image
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

// get detail post
const getDetailPost = async (req, res) => {
  const PostId = req.params.id;
  const UserId = req.user.id;

  const likedPost = await Likes.findOne({
    where: { UserId: UserId, PostId: PostId },
  });

  const post = await Posts.findByPk(PostId);

  if (!post) res.status(404).json({ message: "Not found your blog" });
  else {
    if (!likedPost) {
      res.status(200).json({ post, liked: false });
    } else {
      res.status(200).json({ post, liked: true });
    }
  }
};

// post's comment
const postNewComment = async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await Posts.findByPk(id);

  res.json(post);
};

// update post
const updatePost = async (req, res) => {
  const id = req.params.id;

  const { title, subTitle, categories, content } = req.body;

  const image = await uploadImage(req, res);

  if (!req.body || !id) {
    res.status(400).send({ message: "Something is missing 🤔" });
  }

  await Posts.update(
    {
      title,
      image,
      subTitle,
      categories,
      content,
    },
    { where: { id: id } }
  );

  res.status(200).json({ message: `Update blog ${id} successfully 🥳` });
};

// like post
const likePost = async (req, res) => {
  const PostId = req.params.id;

  const UserId = req.user.id;

  const findPostLiked = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });

  if (!findPostLiked) {
    await Likes.create({ UserId, PostId });

    res.json({ message: `Post ${PostId} is liked` });
  } else {
    await Likes.destroy({ where: { PostId: PostId, UserId: UserId } });

    res.json({ message: `Post ${PostId} is unliked` });
  }
};

module.exports = {
  getAllPost,
  createPost,
  getDetailPost,
  updatePost,
  likePost,
  postNewComment,
  getDetailImage,
};
