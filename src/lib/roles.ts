export const roles = {
  ADMIN: "admin",
  LANDLORD: "landlord",
  TENANT: "tenant",
  ENGINEER: "engineer",
  CONTRACTOR: "contractor",
  COUNCIL: "council"
} as const;

export type Role = (typeof roles)[keyof typeof roles];
