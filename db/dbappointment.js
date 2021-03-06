const AppointmentModel = require('../models/appointment');
const UserModel=require('../models/User');

const adduserAppoinment = async (req, res)  => {
        console.log(req.body);
        const appointment = await AppointmentModel({
            status: req.body.status,
            date: req.body.date,
            observations: req.body.observations,
            dentist: req.body.dentist,
            dni: req.params.dni
        }).save();
        res.status(201).send(appointment);
    }

    const deleteOne = async (req, res)  => {
        try {
            const appointment = await AppointmentModel.findByIdAndDelete({
                _id: req.params._id
            })
            res.send({
                message: 'cita borrada',
                appointment
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'error al borrar la cita'
            })
            
        }
    }

    const userAppoinments = async (req, res) => {
        try {
            const appointment = await AppointmentModel.find({
                dni: req.params.dni
            })
            res.send({
                appointment
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'no se pueden mostrar las citas'
            })
            
        }
    }

module.exports = {adduserAppoinment, 
                  deleteOne,
                  userAppoinments};