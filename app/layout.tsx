// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Output Hasil Magang XCEL",
  description:
    "Dokumentasi dan hasil kegiatan magang di XCEL yang mencakup bidang geodesi, pemetaan, dan pengolahan data geospasial.",

  icons: {
    icon: "/sponsor/logo.png",
    shortcut: "/sponsor/logo.png",
    apple: "/sponsor/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
  rel="icon"
  href="/sponsor/logo.png"
  type="image/png"
  sizes="16x16"
/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
