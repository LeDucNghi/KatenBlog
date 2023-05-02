const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const db = require("./models");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/Users");
const postRouter = require("./routes/Posts");
const commentRouter = require("./routes/Comments");

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comment", commentRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
