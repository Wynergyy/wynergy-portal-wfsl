import { db } from "@/lib/db/client";
import { testRecordSchema } from "@/lib/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = testRecordSchema.parse(body);

    const record = await db.testRecord.create({
      data: {
        title: parsed.title
      }
    });

    return Response.json({ ok: true, record });
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const all = await db.testRecord.findMany();
    return Response.json({ ok: true, records: all });
  } catch (error) {
    return Response.json(
      { ok: false, error: "Database error" },
      { status: 500 }
    );
  }
}
