const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `images`);
  },
  filename: function (req, file, cb) {
    console.log("🚀 ~ file: imageUpload.js:12 ~ file:", file);

    if (file.originalname.includes === "blog")
      cb(null, `blog ${file.originalname}`);
    else cb(null, `avatar ${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("image");

const uploadCloudinary = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  upload,
  uploadCloudinary,
};
