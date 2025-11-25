export default function OnboardingPage() {
  return (
    <form className="space-y-4 p-4">
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
