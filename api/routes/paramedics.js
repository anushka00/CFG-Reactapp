const express = require('express');
const router = express.Router();


const ParamedicController = require('../controllers/paramedics.js');

router.post('/signup', ParamedicController.signUp);

router.post('/login',ParamedicController.logIn);

router.get('/:paraid',  ParamedicController.getOneUser);



module.exports = router;
