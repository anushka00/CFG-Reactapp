const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    requested_service:{type: String},
    patientId:{type: String},
    request_status: {type: String},
    service_provider: { type: String},
    location:{type:String},
    email: {type:String}
});

module.exports = mongoose.model('Request', requestSchema);
