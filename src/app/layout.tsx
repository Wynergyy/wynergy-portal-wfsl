import "./globals.css";

export const metadata = {
  title: "WFSL Portal",
  description: "Accommodation compliance and licensing system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
