const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { body, validationResult } = require("express-validator");

// Validate input
const validateAuth = [
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }).withMessage("Minimum 6 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

router.post("/register", validateAuth, authController.register);
router.post("/login", validateAuth, authController.login);

module.exports = router;
