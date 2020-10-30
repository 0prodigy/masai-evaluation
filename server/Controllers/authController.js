const Employer = require("../Models/Employer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

const myValidation = validationResult.withDefaults({
  formatter: (err) => {
    return {
      err: true,
      message: err.msg,
    };
  },
});

const registerEmployer = async (req, res) => {
  const errors = myValidation(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array()[0];
    return res.status(422).json({ err, message });
  } else {
    const emailExists = await Employer.findOne({ email: req.body.email });
    if (emailExists) {
      return res
        .status(400)
        .send({ err: true, message: "Email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    );
    const employer = new Employer({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      await employer.save();
      res.send({ err: false, message: "Employer Register Successfully" });
    } catch (err) {
      res.status(400).send({ err: true, message: err });
    }
  }
};

const loginEmployer = async (req, res) => {
  const errors = myValidation(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    try {
      const employer = await Employer.findOne({ email: req.body.email });
      if (!employer) {
        return res
          .status(400)
          .send({ err: true, message: "Email or password is wrong" });
      }

      const validPass = await bcrypt.compare(
        req.body.password,
        employer.password
      );
      if (!validPass) {
        return res.status(400).send({ err: true, message: "Invalid password" });
      }

      const accessToken = jwt.sign({ id: employer.id }, process.env.SECRET_KEY);

      res.json({
        err: false,
        message: "Login successfully",
        accessToken: accessToken,
      });
    } catch (err) {
      res.json({ err: true, message: "Something went Wrong" });
    }
  }
};

module.exports = { registerEmployer, loginEmployer };
