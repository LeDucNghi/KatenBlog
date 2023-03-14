const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in 😒" });

  try {
    const validToken = verify(accessToken, "secret");

    req.user = validToken;

    if (validToken) return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

module.exports = { validateToken };
