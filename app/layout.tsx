import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diddy Store — Performance & Gaming",
  description:
    "Packs digitais de otimização e performance para gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
