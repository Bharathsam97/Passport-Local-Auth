import express from 'express';
import { getHome } from '../controllers/authController.js'; // Use the correct controller

const homeRouter = express.Router();

homeRouter.get('/home', getHome); // Use getHome from the controller

export { homeRouter as homeRoutes };
