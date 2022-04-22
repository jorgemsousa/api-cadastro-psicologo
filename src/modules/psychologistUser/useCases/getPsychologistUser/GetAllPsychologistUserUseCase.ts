import { PsychologistUser } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllPsychologistUserUseCase {
  async execute(): Promise<PsychologistUser[]>{
    const getAllPsychologistUsers = await prisma.psychologistUser.findMany({});

    return getAllPsychologistUsers;
  }
}