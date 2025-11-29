export type UserRole = "user" | "engineer" | "contractor" | "admin";

export function hasRole(
  role: UserRole | undefined,
  required: UserRole[]
): boolean {
  if (!role) return false;
  return required.includes(role);
}
