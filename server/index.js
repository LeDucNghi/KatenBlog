const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const postRouter = require("./routes/Posts");
const userRouter = require("./routes/Users");
const commentRouter = require("./routes/Comments");

const db = require("./models");

// routers
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comment", commentRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
