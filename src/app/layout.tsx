import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "La Reserva - Menú Digital",
  description: "Menú digital de La Reserva, experiencia gastronómica premium.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col cursor-none">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <footer className="mt-auto py-4 text-center text-emerald-50/50 text-sm">
          © 2026 Todos los derechos reservados. Creado por Santiago Otero.
        </footer>
      </body>
    </html>
  );
}
