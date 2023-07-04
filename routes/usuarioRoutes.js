import express, { Router }  from "express";
import {formularioLogin} from "../controllers/ususarioController.js"
const router = express.Router();

router.get('/login', formularioLogin);

export default router