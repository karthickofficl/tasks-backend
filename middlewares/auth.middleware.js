const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log("authHeader", authHeader);
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  console.log("token", token);
  if (!token) return res.status(401).json({ error: 'Invalid token format' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log("decoded", decoded);
    req.decodedUser = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ status: 401, error: "invalid user" });
  }
  };
