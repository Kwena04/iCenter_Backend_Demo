const express = require('express');
const router = express.Router();
const staffAvailabilityController = require('../controllers/staffAvailabilityCon');

// GET all appointments (staff only)
router.get('/', requireAnyRole(['staff', 'admin']), staffAvailabilityController.getAllStaffAvailability);

// GET appointment by ID
router.get('/:id', staffAvailabilityController.getStaffAvailabilityId);

// CREATE new appointment
router.post('/', requireAnyRole(['staff', 'admin']), staffAvailabilityController.createStaffAvailability);

// UPDATE appointment
router.put('/:id', requireAnyRole(['staff', 'admin']), appointmentController.updateAppointment);

// DELETE appointment
router.delete('/:id', requireAnyRole(['admin']), appointmentController.deleteAppointment);