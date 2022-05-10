var express = require('express');
var router = express.Router();


const Product = require('../app/controller/Product_json');
const database=require('../databases/Product')


router.post('/creates',Product.AddUser);
router.post('/bulkcreates',Product.AddbulkUser);
router.get('/by-id/:id', Product.getUserById );
router.get('/all', Product.GetUserAll);
router.delete('/delete/:id', Product.DeleteUser);
router.put('/edit/:id', Product.ModifyUser);
router.put('/update',Product.editUserByQuery);



 module.exports = router;


 