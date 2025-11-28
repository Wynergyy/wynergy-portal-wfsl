export async function GET() {
  try {
    return Response.json({ ok: true, step: "callback" });
  } catch (err) {
    return Response.json({ ok: false, error: "callback failed" }, { status: 500 });
  }
}
