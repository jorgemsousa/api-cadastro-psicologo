import { Router } from "express";
import { CreatePsychologistUserController } from "../modules/psychologistUser/useCases/createPsychologistUser/CreatePsychologistUserController";
import { GetAllPsychologistUserController } from "../modules/psychologistUser/useCases/getAllPsychologistUser/GetAllPsychologistUserController"
import { GetOnePsychologistUserController } from "../modules/psychologistUser/useCases/getOnePsychologistUser/GetOnePsychologistUserController"
const createPsychologistUserController = new CreatePsychologistUserController();
const getAllPsychologistUserController = new GetAllPsychologistUserController();
const getOnePsychologistUserController = new GetOnePsychologistUserController();

const psychologistUserRoutes = Router();

psychologistUserRoutes.post("/", createPsychologistUserController.handle);
psychologistUserRoutes.get("/getall", getAllPsychologistUserController.handle);
psychologistUserRoutes.get("/getone/:id", getOnePsychologistUserController.handle);

export { psychologistUserRoutes };