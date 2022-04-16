/*
  Warnings:

  - You are about to drop the column `discription` on the `psychologistUsers` table. All the data in the column will be lost.
  - Added the required column `description` to the `psychologistUsers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_psychologistUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "crp" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "cellphone" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "paymentAccount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_psychologistUsers" ("birthDate", "cellphone", "cpf", "createdAt", "crp", "email", "fullName", "id", "paymentAccount", "region", "updatedAt") SELECT "birthDate", "cellphone", "cpf", "createdAt", "crp", "email", "fullName", "id", "paymentAccount", "region", "updatedAt" FROM "psychologistUsers";
DROP TABLE "psychologistUsers";
ALTER TABLE "new_psychologistUsers" RENAME TO "psychologistUsers";
CREATE UNIQUE INDEX "psychologistUsers_email_key" ON "psychologistUsers"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
