 const database = require('../../databases/Product');

 exports.AddUser = async (req, res) => {
    try {
        console.log(database);


         if (!database) {
             return res.status(404).json({ message: "Failure !" });
         } else {
             return res.status(201).json({ message: "Success !", data: database });
         }
     } catch (error) {
         console.log(error)
     }
 }

 