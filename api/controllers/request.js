const { request } = require('express');
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');

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
  const myReq = createReq(req);

  myReq
    .save()
    .then(myReq => {
      res.status(200).json({
        message: 'Request Added Successfully!',
        memory: {
          _id: myReq._id,
          requested_service: myReq.requested_service,
          patientId: myReq.patientId,
          email: myReq.email,
          location: myReq.location,
          service_provider: myReq.service_provider,
          request_status: myReq.request_status
        }
      });
    })
    .catch(error => {
      next(error);
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

exports.updateOneReuqest = (req, res, next) => {
    const requestId = req.params.requestId;
    Request
        .update({ _id: requestId }, { $set: req.body })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Updated Request Successfully!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        });
};


exports.deleteOneRequest = (req, res, next) => {
    const requestId = req.params.requestId;
    Request
        .remove({ _id:requestId })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Deleted request!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        });
};


exports.sendMail = (req, res, next) => {
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: process.env.MAIL,
          pass: process.env.PASSWORD
      }
    });

    var mailOptions = {
      from: process.env.MAIL,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
      else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({
            result: "Email Send Successfully",
        });
      }
    });
  };

  function createReq(req) {
  	return new Request ({
      _id: new mongoose.Types.ObjectId(),
  		requested_service: req.body.requested_service,
  		patientId: req.body.patientId,
  		email: req.body.email,
  		location: req.body.location,
  		service_provider: req.body.service_provider,
  		request_status: req.body.request_status,
  	});
  }
