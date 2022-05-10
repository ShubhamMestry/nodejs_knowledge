// const category = require('./Category');
// const products = require('./Product');

const category_json = require('./Category_json');
// const product_json = require('./Product_json');

const express = require('express');
const router = express.Router();


// router.use('/categories', category);
// router.use('/products', products);

router.use('/category_json', category_json);
// router.use('/product_json', product_json);


module.exports = router;
