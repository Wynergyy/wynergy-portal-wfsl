import { prisma } from "@/lib/prisma";

export default async function PaymentsPage() {
  const payments = await prisma.payment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Payments</h1>

      <div className="rounded-xl border p-6 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 border-b">Reference</th>
              <th className="py-2 border-b">Amount</th>
              <th className="py-2 border-b">Status</th>
              <th className="py-2 border-b">Method</th>
              <th className="py-2 border-b">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td className="py-2 border-b">{p.reference}</td>
                <td className="py-2 border-b">£{(p.amount / 100).toFixed(2)}</td>
                <td className="py-2 border-b">{p.status}</td>
                <td className="py-2 border-b">{p.method}</td>
                <td className="py-2 border-b">
                  {new Date(p.createdAt).toLocaleString("en-GB")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
