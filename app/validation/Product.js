const { body } = require("express-validator");
const models = require("../../models"); // importing models.
const Sequelize = models.Sequelize;

exports.AddUser = [
  body("ProductName").exists().withMessage("ProductName is required"),

  body("ProductCode").exists().withMessage("ProductCode is required"),

  body("description").exists().withMessage("description is required"),
];
