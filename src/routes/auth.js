import express from 'express';
import * as authController from '../controllers/authController.js';
import passport from 'passport';

const authRouter = express.Router();

authRouter.get('/register', authController.getRegister);
authRouter.post('/register', authController.postRegister);
authRouter.get('/login', authController.getLogin);
authRouter.post('/login',authController.postLogin);
authRouter.get('/logout', authController.getLogout);
export{ authRouter as authRoutes }; // Export the router as authRouter
