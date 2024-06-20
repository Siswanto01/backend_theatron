const express = require('express');
const authMiddleware = require('../middleware/auth-middleware.js');

const userRouter = new express.Router();
userRouter.use(authMiddleware);

module.exports = userRouter;