import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { StrictMode } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prostart",
  description: "New IT promotor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <StrictMode>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </StrictMode>
    </html>
  );
}
