import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="border-b bg-white px-6 py-4 flex items-center gap-4">
          <Image
            src="/wfsl-logo.png"
            alt="WFSL Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h1 className="text-xl font-semibold">
            Wynergy Fibre Solutions Portal
          </h1>
        </header>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
