const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function authenicateToken(req, res, next) {
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res
      .sendStatus(401)
      .json({ err: true, message: "Invalid authorization" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, email) => {
    if (err) {
      return res
        .sendStatus(403)
        .json({ err: true, message: "Invalid authorization" });
    }
    req.authEmail = email.id;
    next();
  });
}

module.exports = authenicateToken;
