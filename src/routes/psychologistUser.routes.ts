import { Router } from "express";
import { CreatePsychologistUserController } from "../modules/psychologistUser/useCases/createPsychologistUser/CreatePsychologistUserController";
import { GetAllPsychologistUserController } from "../modules/psychologistUser/useCases/getPsychologistUser/GetAllPsychologistUserController"
const createPsychologistUserController = new CreatePsychologistUserController();
const getAllPsychologistUserController = new GetAllPsychologistUserController();

const psychologistUserRoutes = Router();

psychologistUserRoutes.post("/", createPsychologistUserController.handle);
psychologistUserRoutes.get("/getall", getAllPsychologistUserController.handle);

export { psychologistUserRoutes };