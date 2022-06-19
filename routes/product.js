const express = require('express');

const router = express.Router();

//middleware
const { authCheck, adminCheck } = require("../middlewares/auth");

//controller
const { create, listAll, update, remove, list} = require("../controllers/product");

//routes
router.post('/product',authCheck, adminCheck,create);
router.get('/products/:count',listAll);
// router.get('/category/:slug',read);
// router.put('/category/:slug',authCheck, adminCheck,update);
// router.delete('/category/:slug',authCheck, adminCheck,remove);

module.exports = router;