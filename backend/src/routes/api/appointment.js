const express = require('express');
const router = express.Router();
const { check, validationResult, param } = require('express-validator');
<<<<<<< HEAD
const { scheduleAppointment,approve,getAllAppointment,deleteAppointment } = require('../../core/appointment');
=======
const { scheduleAppointment,approve,getAllAppointment,getByApproved,deleteAppointment } = require('../../core/appointment');
>>>>>>> 4cbe3ab4ffd4a8a3809b4b7d2cd7f7629fdac87d
const auth = require('../../middleware/auth');

// @route    GET inventory/store/:storeName
// @desc     Get all appointments
// @access   Public
router.get('/appointments', async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let appointments = (await getAllAppointment()).rows

        return res.json(appointments)
    }
    catch (error) {
        console.error(error.message);
        return res.status(400).json({ error });
    }

})

// @route    POST addAppointment
// @desc     Insert a new appointment
// @access   Public
router.post('/addAppointment', check("store_name", "storeName is required").exists(),
    check("description", "description is required").exists(),
    check("donor", "donor is required").exists(),
    check("id", "id is required").exists(),
    check("approved","approved check is required"),
    check("reserved_date", " reservation date required").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const {store_name,id,approved,description,donor,reserved_date} = req.body


            scheduleAppointment(store_name,id,approved,description,donor,reserved_date)

            return res.json("Successfully added appointment!")
        }
        catch (error) {
            console.error(error.message);
            return res.status(400).json({ error });
        }
        
    })

// @route    POST approve
// @desc     Set approve to true or false
// @access   Public 

router.post('/approve', check("store_name", "storeName is required").exists(),
    check("id", "id is required").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const {store_name,id} = req.body
            approve(store_name,id)

            return res.json("Approved changed")
        }
        catch (error) {
            console.error(error.message);
            return res.status(400).json({ error });
        }
        

    })

    router.post('/deleteAppointment', check("store_name", "storeName is required").exists(),
    check("id", "id is required").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const {store_name,id} = req.body
            deleteAppointment(store_name,id)

            return res.json("Apointment deleted")
        }
        catch (error) {
            console.error(error.message);
            return res.status(400).json({ error });
        }
        

    })


module.exports = router;