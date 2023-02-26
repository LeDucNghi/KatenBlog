const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const formidable = require("formidable");
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `images/`);
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// get all post
router.get("/getallpost", async (req, res) => {
  const postList = await Posts.findAll();

  res.json(postList);
});

// create a new post
router.post("/createpost", validateToken, async (req, res) => {
  const post = req.body;

  post.UserId = req.user.id;

  await Posts.create(post);

  res.json(post);
});

router.post("/upload", upload.single("file"), (req, res) => {
  // console.log("🚀 ~ file: Posts.js:27 ~ router.post ~ req:", req.body);

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send({ message: `${req.file}` });
  });
});

// get detail post
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await Posts.findByPk(id);

  res.json(post);
});

// posts comment
router.post("/:id", validateToken, async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await Posts.findByPk(id);

  res.json(post);
});

module.exports = router;
