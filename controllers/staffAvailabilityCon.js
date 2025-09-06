const supabase = require('../config/supabase');

const staffAvailabilityController = {
    // Get all staff availability
    getAllStaffAvailability: async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('staffavailability')
                .select(`*`)
                .order('availabilityid', { ascending: true });

            if (error) throw error;
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    //get availability by ID
    getStaffAvailabilityById: async (req, res) => {
        try {
            const { id } = req.params;
            const { data, error } = await supabase
                .from('staffavailability')
                .select(`* `)
                .eq('id', id)
                .single();

            if (error) throw error;
            if (!data) return res.status(404).json({ error: 'Staff availability not found' });

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Create new staff availability
    createStaffAvailability: async (req, res) => {
        try {
            const {
                availabiltyid,
                dayofweek,
                starttime,
                endtime,
                availabilitystatus
            } = req.body;

            const { data, error } = await supabase
                .from('staffavailability')
                .insert([{
                    availabiltyid,
                    dayofweek,
                    starttime,
                    endtime,
                    availabilitystatus
                }])
                .select();

            if (error) throw error;
            res.status(201).json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },

    // Update StaffAvailability
    updateStaffAvailability: async (req, res) => {
        try {
            const { id } = req.params;
            const updates = { ...req.body, updated_at: new Date() };

            const { data, error } = await supabase
                .from('staffavailability')
                .update(updates)
                .eq('id', id)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) {
                return res.status(404).json({ error: 'Staff availability  not found' });
            }

            res.json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete staff availability
    deleteStaffAvailability: async (req, res) => {
        try {
            const { id } = req.params;
            const { error } = await supabase
                .from('staffavailability')
                .delete()
                .eq('id', id);

            if (error) throw error;
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = staffAvailabilityController;
