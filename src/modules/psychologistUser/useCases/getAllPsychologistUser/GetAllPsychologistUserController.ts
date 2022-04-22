import { Request, Response } from "express"
import { GetAllPsychologistUserUseCase } from "./GetAllPsychologistUserUseCase";


export class GetAllPsychologistUserController {
  async handle(req: Request, res: Response) {
    
    const getAllPsychologistUserUseCase = new GetAllPsychologistUserUseCase();

    const result = await getAllPsychologistUserUseCase.execute()

    return res.status(201).json(result);
  }
}