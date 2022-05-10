var express = require('express');
var router = express.Router();


const Category = require('../app/controller/Category_json');
const database=require('../databases/Category')

router.post('/creates',Category.AddUser);
//router.post('/bulkcreates',Category.AddbulkUser);
//router.get('/by-id/:id', Category.getUserById );
 //router.get('/all', Category.GetUserAll);
 //router.delete('/delete/:id', Category.DeleteUser);
//router.put('/edit/:id', Category.ModifyUser);
// router.put('/update',Category.editUserByQuery);




module.exports = router;