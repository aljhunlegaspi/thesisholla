const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Get token from header
    token = req.headers.authorization.split(' ')[1];

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password');

      // If the user is an admin (role 0), allow them access all data.
      if (req.user.role === 0) {
        next();
      } else {
        // If the user is user (not role 0), allow them to only access objects signed to their own account
        if (req.params.userId && req.params.userId !== req.user.id) {
          res.status(401).send('Unauthorized, not admin');
          return;
        }
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send('Unauthorized, invalid token');
      return;
    }
  } else {
    res.status(401).send('Unauthorized, no token');
    return;
  }
});

module.exports = { protect };