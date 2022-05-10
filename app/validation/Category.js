const { body } = require("express-validator");
const models = require("../../models"); // importing models.
const Sequelize = models.Sequelize;

exports.AddUser = [
  body("CategoryName").exists().withMessage("CategoryName is required"),

  body("CategoryCode").exists().withMessage("CategoryCode is required"),

  body("description").exists().withMessage("description is required"),
];
