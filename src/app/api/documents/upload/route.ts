import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// This endpoint expects FormData with: file, propertyId, category
export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const propertyId = form.get("propertyId") as string | null;
    const category = form.get("category") as string | null;

    if (!file || !propertyId) {
      return NextResponse.json(
        { error: "Missing file or propertyId" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Store file locally (can upgrade to S3, Cloudflare R2 later)
    const fs = await import("fs");
    const uploadsDir = "./uploads";
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }

    const filePath = `${uploadsDir}/${Date.now()}-${file.name}`;
    fs.writeFileSync(filePath, buffer);

    const saved = await prisma.document.create({
      data: {
        propertyId: Number(propertyId),
        category: category ?? "general",
        filePath,
        fileName: file.name,
      },
    });

    return NextResponse.json({ success: true, document: saved });
  } catch (error) {
    console.error("Document upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
