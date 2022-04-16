-- CreateTable
CREATE TABLE "psychologistUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "crp" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "cellphone" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "paymentAccount" TEXT NOT NULL,
    "discription" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "psychologistUsers_email_key" ON "psychologistUsers"("email");
