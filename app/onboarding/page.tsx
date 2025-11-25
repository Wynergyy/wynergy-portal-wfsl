export const dynamic = "force-dynamic";
export const revalidate = 0;

import { registerEngineer } from "./actions";

export default function OnboardingPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    await registerEngineer({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    });
  }

  return (
    <form action={handleSubmit} className="space-y-4 p-4">
      <div>
        <label>Full Name</label>
        <input type="text" name="fullName" required />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" required />
      </div>

      <div>
        <label>Phone</label>
        <input type="text" name="phone" />
      </div>

      <button type="submit">Register Engineer</button>
    </form>
  );
}
