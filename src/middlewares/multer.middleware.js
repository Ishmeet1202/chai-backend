import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // BUT FILE NAME SHOULD BE DIFFRENT BEACUSE THERE CAN BE 5 ISHMEET WHOSE FILE NAME ARE SAME
  },
});

const upload = multer({ storage: storage });

export {upload};