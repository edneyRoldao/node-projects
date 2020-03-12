import express from 'express';
const router = express.Router();
import userValidationSchema from "../validators/user.validator";
import loginValidationSchema from "../validators/login.validator";

import AuthController from "../controllers/auth.controller";
const controller = new AuthController();

// routes
router.post('/register', userValidationSchema(), controller.createUser);

router.post('/login', loginValidationSchema(), controller.login);

export default router;
