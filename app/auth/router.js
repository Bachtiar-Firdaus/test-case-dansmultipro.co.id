const router = require("express").Router();
const multer = require("multer");
const passport = require("passport");
const { validateAuth, validateLogin } = require("../middleware/validator");
const { securityCek } = require("../middleware/security");
const localStrategy = require("passport-local").Strategy;

const authController = require("./controller");

passport.use(
  new localStrategy({ usernameField: "email" }, authController.localStrategy)
);

router.get("/user", securityCek, authController.index);
router.get("/me", securityCek, authController.me);
router.get("/user/:id", securityCek, authController.singgleUser);

router.put("/user/:id", validateAuth, securityCek, authController.update);

router.post("/register", validateAuth, authController.register);

router.post("/login", validateLogin, authController.login);
router.post("/logout", securityCek, authController.logout);

router.delete("/delete/:id", securityCek, authController.destroy);

module.exports = router;
