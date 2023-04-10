const { posts, likes, users } = require("../models");

const { uploadImage } = require("../services/Posts/imageUpload");

// GET ALL POST
const getAllPost = async (req, res) => {
  const postList = await posts.findAll();

  res.json({ postList });
};

// CREATE NEW POST
const createPost = async (req, res) => {
  const post = await req.body;

  const image = await uploadImage(req, res);

  post.userId = req.user.id;
  post.image = image;

  await posts.create(post);

  res.status(200).json({ message: "Create post success 🥳", post });
  // }
};

// GET POST'S DETAIL IMAGE
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

// GET DETAIL POST
const getDetailPost = async (req, res) => {
  const postId = req.params.id;

  const post = await posts.findOne({
    where: { id: postId },
    include: [
      {
        model: users,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "username"],
        },
      },
      {
        model: likes,
        // attributes: {
        //   exclude: ["password", "createdAt", "updatedAt", "username"],
        // },
      },
    ],
  });

  if (!post) res.status(404).json({ message: "Can not find your blog" });
  else {
    // nếu như user đã login và có cả userType từ middlewares trả về
    if (req.user && req.user.id && !req.userType) {
      const userId = req.user.id;
      var userType = null;

      // const likedPost = await likes.findOne({
      //   where: { userId: userId, PostId: PostId },
      // });

      if (userId === post.userId) userType = "isPoster";
      else userType = "isGuest";

      if (!likedPost) {
        res.status(200).json({ post, userType });
      } else {
        res.status(200).json({ post, userType });
      }

      // nếu như user ko login và middlewares trả về userType là guest
    } else if (!req.user && req.userType) {
      const userType = req.userType;
      res.status(200).json({ post, userType });
    }
  }
};

// POST'S COMMENT
const postNewComment = async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await posts.findByPk(id);

  res.json(post);
};

// UPDATE POST
const updatePost = async (req, res) => {
  const id = req.params.id;

  const { title, subTitle, categories, content } = req.body;

  const image = await uploadImage(req, res);

  if (!req.body || !id) {
    res.status(400).send({ message: "Something is missing 🤔" });
  }

  await posts.update(
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

// LIKE POST
const likePost = async (req, res) => {
  const postId = req.params.id;

  const userId = req.user.id;

  const findPostLiked = await likes.findOne({
    where: { postId: postId, userId: userId },
  });

  if (!findPostLiked) {
    await likes.create({ userId, postId });

    res.json({ message: `Post ${postId} is liked` });
  } else {
    await likes.destroy({ where: { postId: postId, userId: userId } });

    res.json({ message: `Post ${postId} is unliked` });
  }
};

// INCREASE BLOG'S VIEW
const increaseBlogView = async (req, res) => {
  const id = req.params.id;

  const post = await posts.findOne({ where: { id: id } });

  await posts.update(
    {
      visit: post.visit + 1,
    },
    { where: { id: id } }
  );

  res.status(200).json({ message: "view + 1" });
};

// TRENDING LIST
const findTrendingList = async (req, res) => {
  const postList = await posts.findAll();

  const sortPostList = await postList.sort((a, b) => {
    return b.visit - a.visit;
  });

  const trendingList = await sortPostList.slice(0, 3);

  res.status(200).json({ trendingList });
};

module.exports = {
  getAllPost,
  createPost,
  getDetailPost,
  updatePost,
  likePost,
  postNewComment,
  getDetailImage,
  increaseBlogView,
  findTrendingList,
};
