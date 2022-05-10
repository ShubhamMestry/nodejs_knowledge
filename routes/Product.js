var express = require('express');
var router = express.Router();


const Product = require('../app/controller/Product');
const catchError = require('../app/middlewares/catch-error');
const ValProduct = require('../app/validation/Product');


router.post('/creates', ValProduct.AddUser,catchError,Product.AddUser);

router.post('/bulkcreates',Product.AddbulkUser);
router.get('/by-id/:id', Product.getUserById );
router.get('/all', Product.GetUserAll);
router.delete('/delete/:id', Product.DeleteUser);
router.put('/edit/:id', Product.ModifyUser);
router.put('/update',Product.editUserByQuery);



module.exports = router;

