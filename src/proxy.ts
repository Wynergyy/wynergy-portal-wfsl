import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  // Disable all proxy, redirects, authentication layers for now.
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
