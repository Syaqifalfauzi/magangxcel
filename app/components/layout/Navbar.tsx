"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur shadow-md
    border-b border-border/10 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="text-primary font-semibold text-lg tracking-wide">
            <Image
              src="/sponsor/XCEL.png"
              alt="Logo PT XYZ Geodesi"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <NavLink href="#hero">Beranda</NavLink>
            <NavLink href="#about">Tentang Perusahaan</NavLink>
            <NavLink href="#internship">Magang</NavLink>
            <NavLink href="#activities">Kegiatan</NavLink>
            <NavLink href="#stats">Statistik</NavLink>
            <NavLink href="#team">Tim</NavLink>
            <NavLink href="#cta">CTA</NavLink>

            <Link
              href="/map"
              className="bg-accent-orange text-accent-orange-foreground font-semibold
              px-5 py-2 rounded-full hover:bg-accent-orange/90 transition shadow-lg hover:shadow-xl"
            >
              Peta Proyek
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-border/10 bg-primary">
            <div className="flex flex-col gap-4 text-sm">
              <NavLink href="#hero" onClick={() => setOpen(false)}>
                Beranda
              </NavLink>
              <NavLink href="#about" onClick={() => setOpen(false)}>
                Tentang Perusahaan
              </NavLink>
              <NavLink href="#internship" onClick={() => setOpen(false)}>
                Magang
              </NavLink>
              <NavLink href="#activities" onClick={() => setOpen(false)}>
                Kegiatan
              </NavLink>
              <NavLink href="#stats" onClick={() => setOpen(false)}>
                Statistik
              </NavLink>
              <NavLink href="#team" onClick={() => setOpen(false)}>
                Tim
              </NavLink>
              <NavLink href="#cta" onClick={() => setOpen(false)}>
                CTA
              </NavLink>
              <Link
                href="/map"
                className="bg-accent-orange text-accent-orange-foreground font-semibold
                text-center px-4 py-2 rounded-md hover:bg-accent-orange/90 transition"
                onClick={() => setOpen(false)}
              >
                Peta Proyek
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* =========================
   NAV LINK COMPONENT
   ========================= */
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  // kalau lagi di homepage
  const finalHref =
    pathname === "/" ? href : `/${href}`;

  return (
    <Link
      href={finalHref}
      onClick={onClick}
      className="relative text-primary-foreground/90 hover:text-accent transition font-medium
      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
      after:w-0 after:bg-accent after:transition-all
      hover:after:w-full"
    >
      {children}
    </Link>
  );
}
