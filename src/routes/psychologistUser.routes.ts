import { Router } from "express";
import { CreatePsychologistUserController } from "../modules/psychologistUser/useCases/createPsychologistUser/CreatePsychologistUserController";
import { GetAllPsychologistUserController } from "../modules/psychologistUser/useCases/getAllPsychologistUser/GetAllPsychologistUserController"
import { GetOnePsychologistUserController } from "../modules/psychologistUser/useCases/getOnePsychologistUser/GetOnePsychologistUserController"
import { UpdatePsychologistUserController } from "../modules/psychologistUser/useCases/updatePsychologistUser/UpdatePsychologistUserController"
import { DeletePsychologistUserController } from "../modules/psychologistUser/useCases/deletePsychologistUser/DeletePsychologistUserController"

const createPsychologistUserController = new CreatePsychologistUserController();

const getAllPsychologistUserController = new GetAllPsychologistUserController();
const getOnePsychologistUserController = new GetOnePsychologistUserController();

const updatePsychologistUserController = new UpdatePsychologistUserController();

const deletePsychologistUserController = new DeletePsychologistUserController();

const psychologistUserRoutes = Router();

psychologistUserRoutes.post("/", createPsychologistUserController.handle);
psychologistUserRoutes.get("/getall", getAllPsychologistUserController.handle);
psychologistUserRoutes.get("/getone/:id", getOnePsychologistUserController.handle);
psychologistUserRoutes.put("/update/:id", updatePsychologistUserController.handle);
psychologistUserRoutes.delete("/delete/:id", deletePsychologistUserController.handle);

export { psychologistUserRoutes };