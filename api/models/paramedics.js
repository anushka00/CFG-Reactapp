const mongoose = require('mongoose');



const paramedicsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patient_id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    name: { type: String },
    City: { type: String },
    PinCode: { type : Number},
    PhoneNo: { type: Number, default: 123 },
    total_request: { type : Number},
    served_request: { type: Number}
});

module.exports = mongoose.model('Paramedic', paramedicsSchema);