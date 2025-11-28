export async function GET() {
  try {
    return Response.json({ ok: true, step: "verify" });
  } catch (err) {
    return Response.json({ ok: false, error: "verify failed" }, { status: 500 });
  }
}
