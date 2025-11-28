export async function GET() {
  try {
    return Response.json({ ok: true, step: "init" });
  } catch (err) {
    return Response.json({ ok: false, error: "init failed" }, { status: 500 });
  }
}
