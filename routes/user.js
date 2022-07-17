const express = require('express');

const router = express.Router();

//middleware
const { authCheck } = require('../middlewares/auth');

//controller
const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
} = require('../controllers/user');

router.post('/user/cart', authCheck, userCart); // save cart
router.get('/user/cart', authCheck, getUserCart); // get cart
router.delete('/user/cart', authCheck, emptyCart); // empty cart
router.post('/user/address', authCheck, saveAddress); // empty cart

module.exports = router;
