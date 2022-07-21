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
  applyCouponToUserCart,
} = require('../controllers/user');

router.post('/user/cart', authCheck, userCart); // save cart
router.get('/user/cart', authCheck, getUserCart); // get cart
router.delete('/user/cart', authCheck, emptyCart); // empty cart

router.post('/user/address', authCheck, saveAddress); // save address

router.post('/user/cart/coupon', authCheck, applyCouponToUserCart); //apply coupon

module.exports = router;
