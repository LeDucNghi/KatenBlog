const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  console.log(
    "🚀 ~ file: AuthMiddlewares.js:5 ~ validateToken ~ accessToken:",
    accessToken
  );

  if (req.query && req.query.type === "isBlog" && !accessToken) {
    req.userType = "isGuest";
    return next();
  } else {
    try {
      const validToken = verify(accessToken, "secret");

      if (!validToken) {
        return res.status(401).send({ message: "Invalid token 😢" });
      }
      req.user = validToken;

      return next();
    } catch (error) {
      return res.status(401).json({ error });
    }
  }
};

module.exports = { validateToken };
