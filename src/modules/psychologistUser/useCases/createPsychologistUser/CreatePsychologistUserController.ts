import { Request, Response } from "express"
import { CreatePsychologistUserUseCase } from "./CreatePsychologistUserUseCase";


export class CreatePsychologistUserController {
  async handle(req: Request, res: Response) {
    const {
      fullName, 
      email, 
      cpf, 
      crp, 
      birthDate, 
      cellphone,
      region,
      paymentAccount,
      description,    
    } = req.body;

    const createPsychologistUserUseCase = new CreatePsychologistUserUseCase();

    const result = await createPsychologistUserUseCase.execute({
      fullName, 
      email, 
      cpf, 
      crp, 
      birthDate, 
      cellphone,
      region,
      paymentAccount,
      description, 
    });

    return res.status(201).json(result);
  }
}