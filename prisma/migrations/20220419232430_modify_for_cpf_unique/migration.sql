/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `psychologistUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "psychologistUsers_cpf_key" ON "psychologistUsers"("cpf");
