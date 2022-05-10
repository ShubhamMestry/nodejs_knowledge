const models = require('../../models');
const category = require('../../models/Product');
const sequilize = models.sequelize;
const validation=require('express-validator');
// logics

exports.AddUser = async (req, res) => {
   try {
            const {
                ProductName,
            ProductCode,
            description,
            CategoryId,
            isActive,
            } = req.body;
        
            let requestObject = {
                ProductName,
            ProductCode,
            description,
            CategoryId,
            isActive,
            };

        const userResponse = await models.product.create( requestObject );
        if (!userResponse) {
            return res.status(404).json({ message: "Failure !" });
        } else {
            return res.status(201).json({ message: "Success !", data: userResponse });
        }
    } catch (error) {
        console.log(error)
    }
}
//findOne
exports.getUserById = async (req,res) => {
    try{
        console.log(req.params);
        // return;
        let userId=req.params.id;

        const userResponse = await models.product.findOne({
            where: {
                id: userId,

                // isActive: true
            },
            include:[{model:models.category,as:'category'}]
        });
        if (!userResponse) {
            res.status(404).json({ message: "Failure" });
        } else {
            res.status(201).json({ message: "success", data: userResponse })
        }
    } catch (error) {
        console.log(error)
}
}

exports.GetUserAll = async (req, res) => {

    try {
        const {  size, page } = req.query;
        const limit = size ? +size : 1;
        const offset = page ? page * limit : 0;
        const userResponse = await models.product.findAll({
            where: {
                // isActive: true
            },
            limit:limit,
            offset:offset
        });
        if (!userResponse) {
            res.status(404).json({ message: "Failure" });
        } else {
            res.status(201).json({ message: "success", data: userResponse })
        }
    } catch (error) {
        console.log(error)
    }
}



exports.DeleteUser = async (req, res) => {
    try{
    let userid = req.params.id;
    let deleteData = await models.product.destroy({ where: { id:userid} });
    if (!deleteData) {
        res.status(404).json({ message: "failure" });
    } else {
        res.status(200).json({ message: "success" })
    }
}catch(error){
    console.log(error);
}
}



// Update Reason by Id
exports.ModifyUser = async (req, res) => {

    try {

        const { id } = req.params;
        const { 
            ProductName,
            ProductCode,
            description,
            CategoryId,
            isActive, } = req.body;

        // var words = email.split('@');
        // var userCode = words[0]

        let requestObject = {
            
            ProductName,
            ProductCode,
            description,
            CategoryId,
            isActive,
        }

        const updatedData = await models.product.update(requestObject, {
            where: {
                id: id,
                // isActive: true
            }
        })

        if (!updatedData) {
            res.status(404).json({ message: "failure" });
        } else {
            res.status(200).json({ message: "success", data: updatedData });
        }

    } catch (error) {
        console.log(error);
    }
}
// modify function with query params
exports.editUserByQuery = async (req, res) => {

    try {

        const { id } = req.params;
        const { 
            
            ProductName,
            ProductCode,
            description,
            CategoryId,
            isActive, } = req.body;

        // var words = email.split('@');
        // var userCode = words[0]

        let requestObject = {
            ProductName,
            ProductCode,
            description,
            CategoryId,
            isActive,
        }

        const updatedData = await models.product.update(requestObject, {
            where: {
                id: id,
                // isActive: false
            }
        })

        if (!updatedData) {
            res.status(404).json({ message: "failure" });
        } else {
            res.status(200).json({ message: "success" });
        }

    } catch (error) {
        console.log(error);
    }
}

exports.AddbulkUser = async (req, res) => {
    try {
  
      const values = req.body.values;
  
      const catResponse1 = await models.product.bulkCreate(values, {returning: true});
  
      if (!catResponse1) {
        res.status(404).json({ message: "Failure !" });
      } else {
        res.status(201).json({ message: "Success !", data: catResponse1 });
      }
    } catch (error) {
      console.log(error)
    }
  };
