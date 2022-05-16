import { PsychologistUser } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class GetAllPsychologistUserUseCase {
  async execute(): Promise<PsychologistUser[]>{
    const getAllPsychologistUsers = await prisma.psychologistUser.findMany({});

    if(getAllPsychologistUsers.length <= 0) {
      throw new AppError("PsychologistUsers do not found", 204);      
    }

    return getAllPsychologistUsers;
  }
}