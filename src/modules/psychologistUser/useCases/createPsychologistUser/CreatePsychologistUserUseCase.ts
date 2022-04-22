import { PsychologistUser } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePsychologistUserDto } from "../../dtos/CreatePsychologistUserDTO";

export class CreatePsychologistUserUseCase {
  async execute({
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
    //verificar se o psychologistUser existe
    const psychologistUserExist = await prisma.psychologistUser.findUnique({
      where: {
        uniques: {
          email,
          crp,
          cpf, 
        },
      }
    })

    //se existir um psychologistUser
    if(psychologistUserExist) {
      throw new AppError("PsychologistUser already exists", 400);      
    }

    //se não existir cria psychologistUser
    const psychologistUser = await prisma.psychologistUser.create({
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

    return psychologistUser;
  }
}