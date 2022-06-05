const mongoose = require('mongoose');

const serviceproviderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String },
    name: { type: String },
    type: { type: String },
    services_available: { type: Array },
    location: { type: String },
});

module.exports = mongoose.model('Serviceprovider', serviceproviderSchema);
