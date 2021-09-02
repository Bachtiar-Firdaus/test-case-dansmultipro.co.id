const { check, validationResult } = require("express-validator");

module.exports = {
  validateAuth: [
    check("fullName").notEmpty(),
    check("email").isEmail(),
    check("password").notEmpty(),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).send({ error: error.array() });
      }
      next();
    },
  ],
  validateLogin: [
    check("email").isEmail(),
    check("password").notEmpty(),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).send({ error: error.array() });
      }
      next();
    },
  ],

  validatePreset: [
    check("name").notEmpty(),
    check("preset").notEmpty(),
    check("status").notEmpty(),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).send({ error: error.array() });
      }
      next();
    },
  ],
};
