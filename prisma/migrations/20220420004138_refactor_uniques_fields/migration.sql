/*
  Warnings:

  - A unique constraint covering the columns `[email,crp,cpf]` on the table `psychologistUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "psychologistUsers_email_key";

-- DropIndex
DROP INDEX "psychologistUsers_crp_key";

-- DropIndex
DROP INDEX "psychologistUsers_cpf_key";

-- CreateIndex
CREATE UNIQUE INDEX "psychologistUsers_email_crp_cpf_key" ON "psychologistUsers"("email", "crp", "cpf");
