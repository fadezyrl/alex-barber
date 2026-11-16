import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { LocaleShell } from "@/components/layout/LocaleShell/LocaleShell";
import { LocaleProvider } from "@/context/LocaleContext";
import { es } from "@/data/dictionaries/es";
import "./globals.css";
import "./alex-barber.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: es.meta.title,
  description: es.meta.description,
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <LocaleShell>{children}</LocaleShell>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
