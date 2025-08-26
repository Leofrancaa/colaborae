import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colaboraê - A casinha mais plural do Rio Vermelho",
  description:
    "Casa de festas e bistrô no coração do Rio Vermelho. Eventos, shows, boa música e gastronomia em Salvador.",
  authors: [{ name: "Colaboraê" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
