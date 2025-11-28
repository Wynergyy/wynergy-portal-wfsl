import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "WFSL Portal",
  description: "WFSL Platform 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
