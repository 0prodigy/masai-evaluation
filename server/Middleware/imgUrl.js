const imgURl = (req, res, next) => {
  req.url = "http://localhost:5000/uploads/" + req.file.filename;
  next();
};

module.exports = imgURl;
