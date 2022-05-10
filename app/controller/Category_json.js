const database = require("../../databases/Category");
const models = require("../../models");

exports.AddUser = async (req, res) => {
  try {
    console.log(database);
    const db = [CategoryDb];
    
                          db.push(
                        { "id": 9,
                          "CategoryName": "grocery",
                          "CategoryCode": 4569,
                          "description":"i",
                          "isActive": true });

    if (!database) {
      return res.status(404).json({ message: "Failure !" });
    } else {
      return res.status(201).json({ message: "Success !", data: database });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    console.log(database);

    if (!database) {
      res.status(404).json({ message: "Failure" });
    } else {
      res.status(201).json({ message: "success", data: database });
    }
  } catch (error) {
    console.log(error);
  }
};
