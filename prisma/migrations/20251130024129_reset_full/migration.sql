/*
  Warnings:

  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ComplianceReminder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GovVerificationLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `lastChecked` on the `AlarmCompliance` table. All the data in the column will be lost.
  - You are about to alter the column `coAlarms` on the `AlarmCompliance` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `smokeAlarms` on the `AlarmCompliance` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to drop the column `fileUrl` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `uploadedAt` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `expiryDate` on the `EICR` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `EICR` table. All the data in the column will be lost.
  - You are about to drop the column `issueDate` on the `EICR` table. All the data in the column will be lost.
  - You are about to drop the column `expiryDate` on the `EPC` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `EPC` table. All the data in the column will be lost.
  - You are about to drop the column `issueDate` on the `EPC` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `EPC` table. All the data in the column will be lost.
  - You are about to drop the column `fireRiskFileUrl` on the `FireSafety` table. All the data in the column will be lost.
  - You are about to drop the column `lastAssessment` on the `FireSafety` table. All the data in the column will be lost.
  - You are about to drop the column `expiryDate` on the `GasSafety` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `GasSafety` table. All the data in the column will be lost.
  - You are about to drop the column `issueDate` on the `GasSafety` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `HabitabilityChecklist` table. All the data in the column will be lost.
  - You are about to drop the column `expiryDate` on the `Licence` table. All the data in the column will be lost.
  - You are about to drop the column `issueDate` on the `Licence` table. All the data in the column will be lost.
  - You are about to drop the column `licenceNumber` on the `Licence` table. All the data in the column will be lost.
  - You are about to drop the column `licenceType` on the `Licence` table. All the data in the column will be lost.
  - Added the required column `name` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AuditLog";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ComplianceReminder";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GovVerificationLog";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Notification";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PaymentAccount";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PaymentMethod";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PaymentSchedule";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PaymentTransaction";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Reminder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Reminder_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Transaction_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "task" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "Schedule_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AlarmCompliance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "smokeAlarms" INTEGER DEFAULT 0,
    "coAlarms" INTEGER DEFAULT 0,
    "status" TEXT NOT NULL,
    CONSTRAINT "AlarmCompliance_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AlarmCompliance" ("coAlarms", "id", "propertyId", "smokeAlarms", "status") SELECT "coAlarms", "id", "propertyId", "smokeAlarms", "status" FROM "AlarmCompliance";
DROP TABLE "AlarmCompliance";
ALTER TABLE "new_AlarmCompliance" RENAME TO "AlarmCompliance";
CREATE UNIQUE INDEX "AlarmCompliance_propertyId_key" ON "AlarmCompliance"("propertyId");
CREATE TABLE "new_Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Document_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("id", "propertyId") SELECT "id", "propertyId" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
CREATE TABLE "new_EICR" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "EICR_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EICR" ("id", "propertyId", "status") SELECT "id", "propertyId", "status" FROM "EICR";
DROP TABLE "EICR";
ALTER TABLE "new_EICR" RENAME TO "EICR";
CREATE UNIQUE INDEX "EICR_propertyId_key" ON "EICR"("propertyId");
CREATE TABLE "new_EPC" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "EPC_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EPC" ("id", "propertyId", "status") SELECT "id", "propertyId", "status" FROM "EPC";
DROP TABLE "EPC";
ALTER TABLE "new_EPC" RENAME TO "EPC";
CREATE UNIQUE INDEX "EPC_propertyId_key" ON "EPC"("propertyId");
CREATE TABLE "new_FireSafety" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "FireSafety_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FireSafety" ("id", "propertyId", "status") SELECT "id", "propertyId", "status" FROM "FireSafety";
DROP TABLE "FireSafety";
ALTER TABLE "new_FireSafety" RENAME TO "FireSafety";
CREATE UNIQUE INDEX "FireSafety_propertyId_key" ON "FireSafety"("propertyId");
CREATE TABLE "new_GasSafety" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "GasSafety_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_GasSafety" ("id", "propertyId", "status") SELECT "id", "propertyId", "status" FROM "GasSafety";
DROP TABLE "GasSafety";
ALTER TABLE "new_GasSafety" RENAME TO "GasSafety";
CREATE UNIQUE INDEX "GasSafety_propertyId_key" ON "GasSafety"("propertyId");
CREATE TABLE "new_HabitabilityChecklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "dampMould" BOOLEAN NOT NULL DEFAULT false,
    "ventilation" BOOLEAN NOT NULL DEFAULT false,
    "heating" BOOLEAN NOT NULL DEFAULT false,
    "structureSafe" BOOLEAN NOT NULL DEFAULT false,
    "fireExitsClear" BOOLEAN NOT NULL DEFAULT false,
    "sanitation" BOOLEAN NOT NULL DEFAULT false,
    "infestation" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    CONSTRAINT "HabitabilityChecklist_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HabitabilityChecklist" ("dampMould", "fireExitsClear", "heating", "id", "infestation", "propertyId", "sanitation", "status", "structureSafe", "ventilation") SELECT "dampMould", "fireExitsClear", "heating", "id", "infestation", "propertyId", "sanitation", "status", "structureSafe", "ventilation" FROM "HabitabilityChecklist";
DROP TABLE "HabitabilityChecklist";
ALTER TABLE "new_HabitabilityChecklist" RENAME TO "HabitabilityChecklist";
CREATE UNIQUE INDEX "HabitabilityChecklist_propertyId_key" ON "HabitabilityChecklist"("propertyId");
CREATE TABLE "new_Licence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Licence_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Licence" ("id", "propertyId", "status") SELECT "id", "propertyId", "status" FROM "Licence";
DROP TABLE "Licence";
ALTER TABLE "new_Licence" RENAME TO "Licence";
CREATE UNIQUE INDEX "Licence_propertyId_key" ON "Licence"("propertyId");
CREATE TABLE "new_Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "occupants" INTEGER NOT NULL DEFAULT 0,
    "households" INTEGER NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Property" ("address", "city", "createdAt", "households", "id", "occupants", "postcode", "propertyType", "updatedAt", "userId") SELECT "address", "city", "createdAt", "households", "id", "occupants", "postcode", "propertyType", "updatedAt", "userId" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "password", "role", "updatedAt") SELECT "createdAt", "email", "id", "password", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
