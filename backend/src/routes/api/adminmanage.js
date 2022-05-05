const express = require('express');
const router = express.Router();
const { check, validationResult, param } = require('express-validator');
const {getAdminCredentialsByEmail, deleteUser, getAllUsers} = require('../../core/admin');
const auth = require('../../middleware/auth');

// @route    GET getAllUsers
// @desc     get all the users
// @access   Public
router.get('/getAllUsers', async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let allUsers = (await getAllUsers()).rows

        return res.json(allUsers)
    }
    catch (error) {
        console.error(error.message);
        return res.status(400).json({ error });
    }
})


// @route    removeUser
// @desc     remove user by their email
// @access   Public
router.delete('/removeUser', check('email', 'email is required')).exists(), async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //something here
        let removal = (await deleteUser)
        return removal.message;
    }
    catch (error) {
        console.error(error.message);
        return res.status(400).json({error});
    }
}


