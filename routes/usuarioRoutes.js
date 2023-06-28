import express, { Router }  from "express";
import {formularioLogin} from "../controllers/ususarioController.js"
const router = express.Router();

router.get('/login', formularioLogin);
//router.get('/registro', formularioRegistro )
//router.get('/olvide-password', formularioOlvidePassword)
export default router