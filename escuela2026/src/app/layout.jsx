import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Escuela 2026",
  description: "Gestión Escolar Inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <main className="container mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
