const { request } = require('express');
const mongoose = require('mongoose');
const Request = require('../models/request');

exports.getAllRequest = (req, res, next) => {
    Request
        .find()
        .exec()
        .then(request => {
            res.status(200).json({
                count: request.length,
                orders: request
            });
        })
        .catch(error => {
            next(error);
        })
};



exports.createOneRequest = (req, res, next) => {

    console.log("Creating Order...")
    return new Request({
        paramedic_id: mongoose.Types.ObjectId(),
        requested_service:req.body.requested_service,
        patientId:req.body.patientId,
        request_status: req.body.request_status,
        service_provider: req.body.service_provider,
        location:req.body.location
    })
    .save()
    .then(result => {
        res.status(200).json({
            request: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};



exports.getRequestByLocation = (req, res, next) => {
    const  location= req.params.location;
    Request
        .find({location:location})//what is the query of string
        .exec()
        .then(request => {
            res.status(201).json(request)
        })
        .catch(error => {
            next(error);
        })
};


exports.getRequestByStatus = (req, res, next) => {
    const  status= req.params.request_status;
    Request
        .find({request_status:status})//what is the query of string
        .exec()
        .then(request => {
            res.status(201).json(request)
        })
        .catch(error => {
            next(error);
        })
};




