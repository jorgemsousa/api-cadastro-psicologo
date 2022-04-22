/*
  Warnings:

  - A unique constraint covering the columns `[crp]` on the table `psychologistUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "psychologistUsers_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "psychologistUsers_crp_key" ON "psychologistUsers"("crp");
