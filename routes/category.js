const express = require('express');
const router = express.Router();
const { create } = require('../controllers/category');

// Validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');

// Middlewares
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post(
  '/category',
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

module.exports = router;
