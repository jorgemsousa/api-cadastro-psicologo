import { PsychologistUser } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePsychologistUserDto } from "../../dtos/CreatePsychologistUserDTO";

export class UpdatePsychologistUserUseCase {
  async execute({ id }: any, {
    fullName, 
    email, 
    cpf, 
    crp, 
    birthDate, 
    cellphone,
    region,
    paymentAccount,
    description,    
  } : CreatePsychologistUserDto): Promise<PsychologistUser>{
   
    const findPsychologistUser = await prisma.psychologistUser.findUnique({
      where: {
        id
      }
    });

    if(!findPsychologistUser) {
      throw new AppError("PsychologistUser do not exists", 400);      
    }

    const updatedPsychologistUser = await prisma.psychologistUser.update({
      where: { id },
      data: { 
        fullName, 
        email, 
        cpf, 
        crp, 
        birthDate, 
        cellphone,
        region,
        paymentAccount,
        description, 
     }
    })
        
    
    return updatedPsychologistUser;
  }
}


