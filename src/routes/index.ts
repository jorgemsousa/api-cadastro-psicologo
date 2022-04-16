import { Router } from "express";
import { psychologistUserRoutes } from "./psychologistUser.routes";


const routes = Router();

routes.use("/psychologistUsers", psychologistUserRoutes);

export { routes };
