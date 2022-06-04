const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const Serviceprovider = require('../models/serviceprovider');

exports.signUp = (req, res, next) => {
    var img;
    Serviceprovider
        .find({ email: req.body.email })
        .exec()
        .then(serviceprovider => {
            if (serviceprovider.length < 1) {
                var salt = bcrypt.genSaltSync(10)
                return bcrypt.hash(req.body.password, salt, null, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const serviceprovider = new Serviceprovider({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            name: req.body.name,
                            type: req.body.type,
                            location: req.body.location,
                            services_available: req.body.services_available
                        });
                        serviceprovider
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "Serviceprovider created"
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
            error.message = 'Serviceprovider Exists!';
            throw error;
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.logIn = (req, res, next) => {
    let email = undefined, serviceproviderId = undefined;
    Serviceprovider
        .find({ email: req.body.email })
        .exec()
        .then(serviceprovider => {
            if (serviceprovider.length < 1) {
                return res.status(404).json({
                    errror: "No serviceprovider found!"
                });
            }
            email = serviceprovider[0].email;
            serviceproviderId = serviceprovider[0]._id;
            return bcrypt.compare(req.body.password, serviceprovider[0].password, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: email,
                            serviceproviderId: serviceproviderId
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "365d"
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth Successful!',
                        token: token,
                        serviceprovider: serviceprovider[0],
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

exports.getOneServiceProvider = (req, res, next) => {
    const serviceProviderId = req.params.serviceProviderId;
    Serviceprovider
        .findById(serviceProviderId)
        .select('_id email name location type services_available')
        .exec()
        .then(result => {
            if(!result){
                return res.status(404).json({
                    error: 'ServiceProvider not found',
                });
            }
            return res.status(200).json({
                serviceprovider: result,
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err,
            });
        });
}

exports.getAllServiceProviders = (req, res, next) => {
	Serviceprovider
		.find()
		.exec()
		.then(serviceproviders => {
			const response = {
				count: serviceproviders.length,
				serviceproviders: serviceproviders.map(serviceprovider => {
					return {
						_id: serviceprovider._id,
						name: serviceprovider.name,
						email: serviceprovider.email,
						location: serviceprovider.location,
						type: serviceprovider.type,
						services_available: serviceprovider.services_available
					}
				})
			};
			res.status(200).json(response);
		})
		.catch(error => {
			next(error);
		})
};
