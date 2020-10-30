const imgURl = (req, res, next) => {
  let files = req.files.map((element) => ({
    ...element,
    url: "http://localhost:5000/uploads/" + element.filename,
  }));
  req.files = files;
  next();
};

module.exports = imgURl;
