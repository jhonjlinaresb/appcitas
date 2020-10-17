const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    status: {
        type: String,
        required: [true, 'Required field']
    },
    date: {
        type: String,
        required: [true, 'Required field']
    },
    observations: {
        type: String
    },
    token_id: {
        type: String,
        required: true
    }
})

const AppointmentModel = mongoose.model('appoinments', AppointmentSchema);

module.exports = AppointmentModel;