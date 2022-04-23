import { Request, Response } from "express"
import { DeletePsychologistUserUseCase } from "./DeletePsychologistUserUseCase";


export class DeletePsychologistUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    
    const deletePsychologistUserUseCase = new DeletePsychologistUserUseCase();

    const result = await deletePsychologistUserUseCase.execute({ id });

    return res.status(201).json(result);
  }
}