import express from 'express';
import {homeControllers} from "../controllers/homeControllers.js";
const routes = express.Router();
routes.get('/',homeControllers );  
export default routes;
 