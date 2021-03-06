const { getToken } = require("../utilts/get-token");
const config = require("../config");
const User = require("../auth/model");
const jwt = require("jsonwebtoken");

function decodeToken() {
  return async function (req, res, next) {
    try {
      let token = getToken(req);
      if (!token) return next();
      req.user = jwt.verify(token, config.secretKey);
      let user = await User.findOne({ token: { $in: [token] } });
      if (!user) {
        return res.json({
          error: 1,
          message: `Token expired`,
        });
      }
    } catch (error) {
      if (error) {
        return res.json({
          status: "error",
          message: error.message,
        });
      }
      next(error);
    }
    return next();
  };
}

module.exports = { decodeToken };
