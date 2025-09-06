const express = require('express');
const router = express.Router();
const staffAvailabilityController = require('../controllers/staffAvailabilityCon');
const { requireAuth, requireAnyRole } = require('../middleware/authMiddleware');

// GET all staff availability (staff only)
router.get('/', requireAuth, requireAnyRole(['staff', 'admin']), staffAvailabilityController.getAllStaffAvailability);

// GET staff availability by ID
router.get('/:id', staffAvailabilityController.getStaffAvailabilityById);

// CREATE new staff availability
router.post('/', requireAuth, requireAnyRole(['staff', 'admin']), staffAvailabilityController.createStaffAvailability);

// UPDATE staff availability
router.put('/:id', requireAuth, requireAnyRole(['staff', 'admin']), staffAvailabilityController.updateStaffAvailability);

// DELETE staff availability
router.delete('/:id', requireAuth, requireAnyRole(['admin']), staffAvailabilityController.deleteStaffAvailability);

module.exports = router;