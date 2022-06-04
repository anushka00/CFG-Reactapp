const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const Paramedic = require('../models/paramedics');

exports.signUp = (req, res, next) => {
    Paramedic
        .find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                var salt = bcrypt.genSaltSync(10)
                return bcrypt.hash(req.body.password, salt, null, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const paramedic = new Paramedic({
                            _id: new mongoose.Types.ObjectId(),
                            patient_id: req.body.patient_id,
                            email:req.body.email,
                            password:hash,
                            name:req.body.name,
                            City:req.body.City,
                            PinCode:req.body.PinCode,
                            PhoneNo:req.body.PhoneNo,
                            total_request:req.body.total_request,
                            served_request:req.body.served_request

                        });
                        paramedic
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "Paramedic created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
            const error = new Error();
            error.message = 'Paramedic Exists!';
            throw error;
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.logIn = (req, res, next) => {
    let email = undefined, paraId = undefined;
    Paramedic
        .find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    errror: "No user found!"
                });
            }
            email = user[0].email;
            paraId = user[0]._id;
            return bcrypt.compare(req.body.password, user[0].password, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: email,
                            paraId: paraId
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "365d"
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth Successful!',
                        token: token,
                        user: user[0],
                    });
                }
                return res.status(401).json({
                    message: "Invalid email or password"
                });
            });
        })
        .catch(error => {
            next(error);
        });
};

// function createUser(email, hash) {
//     return new User({
//         _id: new mongoose.Types.ObjectId(),
//         email: email,
//         password: hash
//     });
// }

exports.getOneUser = (req, res, next) => {
    const userId = req.params.paraid;
    Paramedic
        .findById(userId)
        .select('_id email name City patient_id type_of_service phoneNo')
        .exec()
        .then(result => {
            if(!result){
                return res.status(404).json({
                    error: 'User not found',
                });
            }
            return res.status(200).json({
                user: result,
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err,
            });
        });
}

