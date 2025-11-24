# ======================================================================
# Wynergy Portal – Neon Postgres Setup Script
# ======================================================================
# Purpose:
#   1. Pull Vercel environment variables to .env.local
#   2. Install Neon serverless driver
#   3. Install dependencies
#   4. Generate Prisma client
#   5. Push schema to Neon DB
#   6. Validate DB connection
# ======================================================================

Write-Host "`n=== Wynergy Portal | Neon Database Setup ===`n" -ForegroundColor Cyan

# Move into project directory
$projectPath = "E:\CIC\WynergyFibreSolutions\Platform\portal"
Set-Location $projectPath
Write-Host "Project directory set to: $projectPath"

# -------------------------------------------------------------
# 1. Pull Vercel environment variables
# -------------------------------------------------------------
Write-Host "`n[1] Pulling environment variables from Vercel..." -ForegroundColor Yellow
vercel env pull .env.local

if (-Not (Test-Path ".env.local")) {
    Write-Error "FAILED: .env.local was not created. Check Vercel credentials."
    exit 1
}

Write-Host "✓ .env.local updated successfully.`n" -ForegroundColor Green

# -------------------------------------------------------------
# 2. Install Neon serverless driver
# -------------------------------------------------------------
Write-Host "[2] Installing Neon serverless driver..." -ForegroundColor Yellow
npm install @neondatabase/serverless --silent
Write-Host "✓ Neon driver installed.`n" -ForegroundColor Green

# -------------------------------------------------------------
# 3. Install Node dependencies
# -------------------------------------------------------------
Write-Host "[3] Installing project dependencies..." -ForegroundColor Yellow
npm install --silent
Write-Host "✓ Dependencies installed.`n" -ForegroundColor Green

# -------------------------------------------------------------
# 4. Generate Prisma Client
# -------------------------------------------------------------
Write-Host "[4] Generating Prisma client..." -ForegroundColor Yellow
npx prisma generate
Write-Host "✓ Prisma client generated.`n" -ForegroundColor Green

# -------------------------------------------------------------
# 5. Push schema to Neon database
# -------------------------------------------------------------
Write-Host "[5] Pushing Prisma schema to Neon database..." -ForegroundColor Yellow
npx prisma db push
Write-Host "✓ Prisma schema synced with Neon.`n" -ForegroundColor Green

# -------------------------------------------------------------
# 6. Test Neon DB connection
# -------------------------------------------------------------
Write-Host "[6] Testing database connectivity..." -ForegroundColor Yellow

$testCommand = @"
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const result = await sql`SELECT now()`;
console.log(result);
"@

node -e $testCommand

Write-Host "✓ Neon DB connection verified.`n" -ForegroundColor Green

Write-Host "`n=== Wynergy Portal – Neon DB Setup Complete ===`n" -ForegroundColor Cyan
