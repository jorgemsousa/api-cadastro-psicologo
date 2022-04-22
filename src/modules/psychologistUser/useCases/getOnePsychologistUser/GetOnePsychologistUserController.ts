import { Request, Response } from "express"
import { GetOnePsychologistUserUseCase } from "./GetOnePsychologistUserUseCase";


export class GetOnePsychologistUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getOnePsychologistUserUseCase = new GetOnePsychologistUserUseCase();

    const result = await getOnePsychologistUserUseCase.execute({ id })

    return res.status(201).json(result);
  }
}