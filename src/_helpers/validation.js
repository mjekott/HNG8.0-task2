const { body, validationResult } = require('express-validator');

contactValidator = [
  body('email').isEmail().withMessage('Email is required'),
  body('message')
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 5 })
    .withMessage('Message must be greater than 5 letters'),
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .bail()
    .isLength({ min: 3 }),
];

const valid = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0] });
  }
  next();
};

module.exports = {
  contactValidator,
  valid,
};
