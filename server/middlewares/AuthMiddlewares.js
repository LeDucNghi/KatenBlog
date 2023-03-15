const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  const { type } = req.body;

  if (type === "isGuest") return next();
  if (type === "isPoster" || type === "isAdd") {
    if (!accessToken) return res.json({ error: "User not logged in 😒" });

    try {
      const validToken = verify(accessToken, "secret");

      req.user = validToken;

      if (!validToken)
        return res.status(401).json({ message: "Invalid token 😢" });
      else return next();
    } catch (error) {
      return res.status(401).json({ error });
    }
  }
};

module.exports = { validateToken };
