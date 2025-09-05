const express = require('express');
const router = express.Router();
const staffAvailabilityController = require('../controllers/staffAvailabilityCon');

// GET all staff availability (staff only)
router.get('/', requireAnyRole(['staff', 'admin']), staffAvailabilityController.getAllStaffAvailability);

// GET staff availability by ID
router.get('/:id', staffAvailabilityController.getStaffAvailabilityById);

// CREATE new staff availability
router.post('/', requireAnyRole(['staff', 'admin']), staffAvailabilityController.createStaffAvailability);

// UPDATE staff availability
router.put('/:id', requireAnyRole(['staff', 'admin']), staffAvailabilityController.updateStaffAvailability);

// DELETE staff availability
router.delete('/:id', requireAnyRole(['admin']), staffAvailabilityController.deleteStaffAvailability);