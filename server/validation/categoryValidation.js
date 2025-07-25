const { body, validationResult } = require("express-validator");

const validateCategory = [
  body("name").notEmpty().withMessage("Category name is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = { validateCategory };
