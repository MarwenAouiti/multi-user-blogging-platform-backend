const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least six characters"),
];
