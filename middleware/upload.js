const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "campusconnect/avatars",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});


const upload = multer({
  storage: storage,
});


module.exports = upload;