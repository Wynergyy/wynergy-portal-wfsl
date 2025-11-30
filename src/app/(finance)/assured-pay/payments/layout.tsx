export const metadata = {
  title: "Assured Pay | Payments",
};

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8">
      {children}
    </div>
  );
}
