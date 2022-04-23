import { Request, Response } from "express"
import { UpdatePsychologistUserUseCase } from "./UpdatePsychologistUserUseCase";


export class UpdatePsychologistUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
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

    const updatePsychologistUserUseCase = new UpdatePsychologistUserUseCase();

    const result = await updatePsychologistUserUseCase.execute({ id },
    {
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