const { posts, likes, users, recents } = require("../models");
const {
  uploadImage,
  handlePaginate,
  handleSortList,
} = require("../services/Post");

// GET ALL POST
const getAllPost = async (req, res) => {
  const data = await posts.findAll({
    include: {
      model: users,
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "username"],
      },
    },
  });

  res.json({ data });
};

// GET POST BY CATEGORY
const getPostByCategories = async (req, res) => {
  const categoryName = await req.params.name;

  if (!categoryName)
    return res.status(404).send({ message: "Not found your categories 🤔" });

  const categoriesData = await posts.findAll({
    where: { categories: categoryName },
  });

  if (!categoriesData)
    return res.status(404).send({
      message: "This category does not have any posts 😢 Please try another!",
    });
  else {
    const data = handlePaginate(req, categoriesData);
    return res.status(200).send({
      ...data,
    });
  }
};

// CREATE NEW POST
const createPost = async (req, res) => {
  const post = await req.body;

  const image = await uploadImage(req, res);

  post.userId = req.user.id;
  post.image = image;

  await posts.create(post);

  res.status(200).json({ message: "Create post success 🥳", post });
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
      },
    ],
  });

  if (!post)
    res.status(404).json({
      message: `Sorry, we couldn’t find the blog you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.`,
    });
  else {
    // nếu như user đã login và có cả userType từ middlewares trả về
    if (req.user && req.user.id && !req.userType) {
      const userId = req.user.id;
      var userType = null;

      if (userId === post.userId) userType = "isPoster";
      else userType = "isGuest";

      res.status(200).json({ post, userType });
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
  var newImage = null;
  const id = req.params.id;

  const { title, subTitle, categories, content, image } = req.body;

  if (!image) {
    newImage = await uploadImage(req, res);
  }

  if (!req.body || !id) {
    res.status(400).send({ message: "Something is missing 🤔" });
  } else {
    if (!image) {
      await posts.update(
        {
          title,
          image: newImage,
          subTitle,
          categories,
          content,
        },
        { where: { id: id } }
      );
    } else {
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
    }

    res.status(200).send({ message: `Update blog ${id} successfully 🥳` });
  }
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

// USER'S POST
const findUserPost = async (req, res) => {
  const userId = req.params.id;
  const postListType = req.query.type;
  var paginatedResults = null;
  var userPostList = null;

  if (postListType !== "all" || postListType !== "popular") {
    userPostList = await posts.findAll({
      where: { categories: postListType, userId: userId },
      include: {
        model: users,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "username"],
        },
      },
    });
  } else {
    userPostList = await posts.findAll({
      where: { userId: userId },
      include: {
        model: users,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "username"],
        },
      },
    });
  }

  if (!userPostList) {
    // this has 3 types of post lists to response
    // 1st is all post : reponse all user's post list
    // 2nd is the popular post : response popular's post list
    // 3rd is the rest of the types : Lifestyle | Food and Drink | ...

    res.status(404).json({
      message: "Not found any blog or this user has not shared any blog yet🤔",
    });
  } else {
    if (postListType === "all") {
      paginatedResults = await handlePaginate(req, userPostList);
    } else if (postListType === "popular") {
      const popularList = await userPostList.sort((a, b) => {
        return b.visit - a.visit;
      });

      paginatedResults = await handlePaginate(req, popularList);
    } else {
      const newList = await userPostList.sort((a, b) => {
        return b.visit - a.visit;
      });

      paginatedResults = await handlePaginate(req, newList);
    }

    res.status(200).json({ ...paginatedResults });
  }
};

const updateUserRecentBlog = async (req, res) => {
  const postId = Number(req.params.postId);
  const userId = req.user.id;

  await recents.create({ postId, userId });

  res
    .status(200)
    .send({ message: `You've just read blog ${req.params.postId}` });
};

const getUserRecentBlog = async (req, res) => {
  const userId = req.user.id;

  const data = await recents.findAll({
    where: { userId: userId },
    include: {
      model: posts,
      include: {
        model: users,
      },
    },
  });

  // sort by newest user's recent blog
  const sortedData = await handleSortList(data, "latest");

  // remove duplicate recent blog
  const newData = [
    ...new Map(sortedData.map((data) => [data.post.id, data])).values(),
  ];

  res.status(200).send({ data: newData });
};

const getLatestBlogList = async (req, res) => {
  const data = await posts.findAll({
    include: {
      model: users,
      attributes: {
        exclude: ["password", "username"],
      },
    },
  });

  const sortByLatest = await handleSortList(data, "latest");
  const paginatedResults = await handlePaginate(req, sortByLatest);

  res.status(200).send({ ...paginatedResults });
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
  findUserPost,
  getPostByCategories,
  updateUserRecentBlog,
  getUserRecentBlog,
  getLatestBlogList,
};
