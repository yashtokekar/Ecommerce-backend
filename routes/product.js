const express = require('express');

const router = express.Router();

//middleware
const { authCheck, adminCheck } = require('../middlewares/auth');

//controller
const {
  create,
  listAll,
  update,
  read,
  remove,
  list,
  productsCount,
  productStar,
} = require('../controllers/product');

//routes
router.post('/product', authCheck, adminCheck, create);
router.get('/products/total', productsCount);
router.get('/products/:count', listAll);
router.delete('/product/:slug', authCheck, adminCheck, remove);
router.get('/product/:slug', read);
router.put('/product/:slug', authCheck, adminCheck, update);
router.post('/products', list);
router.put('/product/star/:productId', authCheck, productStar);

module.exports = router;
