import { PsychologistUser } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class GetOnePsychologistUserUseCase {
  async execute({ id }: any): Promise<PsychologistUser>{
    const getOnePsychologistUser = await prisma.psychologistUser.findUnique({
      where: {
        id
      }
    });

    if(!getOnePsychologistUser) {
      throw new AppError("PsychologistUser do not exists", 204);      
    }

    return getOnePsychologistUser;
  }
}