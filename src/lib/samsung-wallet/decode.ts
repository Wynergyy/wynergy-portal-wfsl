export function decodeSamsungPayload(payload: any) {
  return {
    documentType: payload?.documentType || "unknown",
    deviceId: payload?.deviceId || null,
    rawClaims: payload || {},
  };
}
