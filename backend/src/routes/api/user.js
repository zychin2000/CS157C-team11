const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

const {getUserCredentialsByEmail, registerNewUser, createDonorAccount, createStaffAccount} = require('../../core/user')
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
    '/',
    check('first_name', 'First name is required').notEmpty(),
    check('last_name', 'First name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('accountType', 'Please enter a valid accountType, one of: staff, donor').isIn(['staff', 'donor']),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      let {email, password, accountType, first_name, last_name, organization, contact_info} = req.body;
  
      try {
        let user = await getUserCredentialsByEmail(email);
  
        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }
  
        let uid = uuidv4();
  
        if(accountType=='staff'){
          await createStaffAccount(uid, contact_info, email, first_name, last_name, organization)
        } else if(accountType=='donor'){
          await createDonorAccount(uid, contact_info, email, first_name, last_name, organization)
        }
  
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
  
        await registerNewUser(email, password, uid);
  
        const payload = {
          user: {
            id: uid
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  
  module.exports = router;