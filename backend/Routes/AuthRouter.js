const { register, login } = require('../Controllers/AuthController.js');
const { registerValidation, loginValidation } = require('../Middlewares/AuthValidation.js');

const router= require('express').Router();


router.post('/register',registerValidation,register);
router.post('/',loginValidation,login);

module.exports =router;