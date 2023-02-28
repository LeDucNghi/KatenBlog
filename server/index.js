const express = require("express");
const cors = require("cors");
const app = express();
const cloudinary = require("cloudinary").v2;

const db = require("./models");

cloudinary.config({
  cloud_name: "dipy1kllm",
  api_key: "963494861841115",
  api_secret: "y7ClOhJwUBrZpIdEiJD3b4w4VBE",
  secure: true,
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const postRouter = require("./routes/Posts");
const userRouter = require("./routes/Users");
const commentRouter = require("./routes/Comments");

// routers
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comment", commentRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
