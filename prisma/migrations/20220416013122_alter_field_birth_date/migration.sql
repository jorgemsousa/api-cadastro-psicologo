-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_psychologistUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "crp" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "paymentAccount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_psychologistUsers" ("birthDate", "cellphone", "cpf", "createdAt", "crp", "description", "email", "fullName", "id", "paymentAccount", "region", "updatedAt") SELECT "birthDate", "cellphone", "cpf", "createdAt", "crp", "description", "email", "fullName", "id", "paymentAccount", "region", "updatedAt" FROM "psychologistUsers";
DROP TABLE "psychologistUsers";
ALTER TABLE "new_psychologistUsers" RENAME TO "psychologistUsers";
CREATE UNIQUE INDEX "psychologistUsers_email_key" ON "psychologistUsers"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
