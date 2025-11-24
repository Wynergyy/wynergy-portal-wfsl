-- CreateTable
CREATE TABLE "Contractor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "engineerId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "issuedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME NOT NULL,
    CONSTRAINT "Certification_engineerId_fkey" FOREIGN KEY ("engineerId") REFERENCES "Engineer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LicenceAssignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "engineerId" TEXT NOT NULL,
    "licenceCode" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LicenceAssignment_engineerId_fkey" FOREIGN KEY ("engineerId") REFERENCES "Engineer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Engineer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contractorId" TEXT,
    CONSTRAINT "Engineer_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Engineer" ("createdAt", "email", "fullName", "id", "phone") SELECT "createdAt", "email", "fullName", "id", "phone" FROM "Engineer";
DROP TABLE "Engineer";
ALTER TABLE "new_Engineer" RENAME TO "Engineer";
CREATE UNIQUE INDEX "Engineer_email_key" ON "Engineer"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Contractor_email_key" ON "Contractor"("email");
