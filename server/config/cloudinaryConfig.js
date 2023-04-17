const cloudinary = require("cloudinary").v2;

const clound = cloudinary.config({
  cloud_name: "dipy1kllm",
  api_key: "963494861841115",
  api_secret: "y7ClOhJwUBrZpIdEiJD3b4w4VBE",
  secure: true,
});

module.exports = clound;
