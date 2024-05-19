import express from 'express';
import authController from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/login', authController.login);
router.post('/signup', authController.signup);

export default router;
