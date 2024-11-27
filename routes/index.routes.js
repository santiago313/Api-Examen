import carro from "./concesionaria.routes.js";
import ejemplo from "./ejemplo.routes.js";
import { Router } from "express";
const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/autos', carro)

export default indexRoutes; 