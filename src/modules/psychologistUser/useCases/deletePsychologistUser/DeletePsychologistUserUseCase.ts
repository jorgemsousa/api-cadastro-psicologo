import { PsychologistUser } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeletePsychologistUserUseCase {
  async execute({ id }: any): Promise<PsychologistUser>{
   
    const findPsychologistUser = await prisma.psychologistUser.findUnique({
      where: {
        id
      }
    });

    if(!findPsychologistUser) {
      throw new AppError("PsychologistUser do not exists", 400);      
    }

    const deletedPsychologistUser = await prisma.psychologistUser.delete({
      where: { 
        id 
      },
    })
        
    
    return deletedPsychologistUser;
  }
}


