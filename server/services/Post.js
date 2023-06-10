const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, `images`);
  // },
  filename: function (req, file, cb) {
    console.log("🚀 ~ file: Post.js:12 ~ file:", file);
    cb(null, `${new Date().getDate()} `);
  },
});

const upload = multer({ storage: storage }).single("image");

const uploadImage = async (req, res) => {
  try {
    res.setHeader("Content-Type", "multipart/form-data");

    if (req.file) {
      const imageLink = await uploadCloudinary(req.file.path);

      return imageLink;
    } else res.status(400).json({ message: "No file uploaded" });
  } catch (error) {
    console.log("🚀 ~ file: Posts.js:46 ~ router.post ~ error:", error);
  }
};

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
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

const handlePaginate = (req, list) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const totalRows = list.length;
  const totalPages = Math.ceil(totalRows / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};
  var paginatedResults = null;

  data.pagination = {
    page,
    limit,
    totalRows,
    totalPages,
  };

  data.data = list.slice(startIndex, endIndex);

  paginatedResults = data;

  return paginatedResults;
};

const handleSortList = (list, type) => {
  var newList = null;

  // oldest - latest
  if (type === "latest") {
    newList = list.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
  } else {
    newList = list.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
  }

  return newList;
};

module.exports = {
  upload,
  uploadImage,
  handlePaginate,
  handleSortList,
};
