const express = require('express');
const router = express.Router();

const ServiceproviderController = require('../controllers/serviceprovider');

router.post('/signup', ServiceproviderController.signUp);

router.post('/login', ServiceproviderController.logIn);

router.get('/:serviceProviderId', ServiceproviderController.getOneServiceProvider);

router.get('/', ServiceproviderController.getAllServiceProviders);

module.exports = router;
