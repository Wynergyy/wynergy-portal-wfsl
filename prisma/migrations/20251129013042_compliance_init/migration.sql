-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'landlord',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "occupants" INTEGER NOT NULL DEFAULT 1,
    "households" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GasSafety" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "fileUrl" TEXT,
    "issueDate" DATETIME,
    "expiryDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'missing',
    CONSTRAINT "GasSafety_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EICR" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "fileUrl" TEXT,
    "issueDate" DATETIME,
    "expiryDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'missing',
    CONSTRAINT "EICR_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EPC" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "fileUrl" TEXT,
    "rating" TEXT,
    "issueDate" DATETIME,
    "expiryDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'missing',
    CONSTRAINT "EPC_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FireSafety" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "fireRiskFileUrl" TEXT,
    "lastAssessment" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'missing',
    CONSTRAINT "FireSafety_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlarmCompliance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "smokeAlarms" BOOLEAN NOT NULL DEFAULT false,
    "coAlarms" BOOLEAN NOT NULL DEFAULT false,
    "lastChecked" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'non_compliant',
    CONSTRAINT "AlarmCompliance_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Licence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "licenceType" TEXT,
    "licenceNumber" TEXT,
    "issueDate" DATETIME,
    "expiryDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'not_required',
    CONSTRAINT "Licence_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HabitabilityChecklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "dampMould" BOOLEAN NOT NULL DEFAULT false,
    "ventilation" BOOLEAN NOT NULL DEFAULT false,
    "heating" BOOLEAN NOT NULL DEFAULT false,
    "structureSafe" BOOLEAN NOT NULL DEFAULT false,
    "fireExitsClear" BOOLEAN NOT NULL DEFAULT false,
    "sanitation" BOOLEAN NOT NULL DEFAULT false,
    "infestation" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'incomplete',
    CONSTRAINT "HabitabilityChecklist_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Document_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplianceReminder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "reminderDate" DATETIME NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "ComplianceReminder_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "propertyId" INTEGER,
    "userId" INTEGER,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "details" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GasSafety_propertyId_key" ON "GasSafety"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "EICR_propertyId_key" ON "EICR"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "EPC_propertyId_key" ON "EPC"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "FireSafety_propertyId_key" ON "FireSafety"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "AlarmCompliance_propertyId_key" ON "AlarmCompliance"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Licence_propertyId_key" ON "Licence"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "HabitabilityChecklist_propertyId_key" ON "HabitabilityChecklist"("propertyId");
