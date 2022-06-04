const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    paramedic_id: mongoose.Schema.Types.ObjectId,
    requested_service:{type: String},
    patientId:{type: String},
    request_status: {type: String},
    service_provider: { type: String},
    location:{type:String}
});

module.exports = mongoose.model('Request', requestSchema);