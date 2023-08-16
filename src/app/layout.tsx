import "./globals.css";
import type { Metadata } from "next";
import { REM } from "next/font/google";

const inter = REM({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IHenriquez - Generador de curiosidades",
  description:
    "Prepárate para explorar preguntas que ni siquiera sabías que tenías y sumergirte en datos sorprendentes que ampliarán tus horizontes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
