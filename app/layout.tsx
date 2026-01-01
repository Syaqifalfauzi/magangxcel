// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Output Hasil Magang XCEL",
  description:
    "Dokumentasi dan hasil kegiatan magang di XCEL yang mencakup bidang geodesi, pemetaan, dan pengolahan data geospasial.",

  icons: {
    icon: "/sponsor/XCEL.PNG",
    shortcut: "/sponsor/XCEL.PNG",
    apple: "/sponsor/XCEL.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
