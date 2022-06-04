const express = require('express');
const router = express.Router();

const RequestsController = require('../controllers/request');

router.get('/',RequestsController.getAllRequest);

router.post('/',RequestsController.createOneRequest);

router.get('/location/:location', RequestsController.getRequestByLocation);

router.get('/status/:request_status', RequestsController.getRequestByStatus);


module.exports = router;