import express, { Router }  from "express";
import {panelArticulo} from "../controllers/articuloController.js"
const router = express.Router();

router.get('/index', panelArticulo);

export default router