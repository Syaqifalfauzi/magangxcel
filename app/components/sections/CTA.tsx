import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative bg-background border border-border/20
        rounded-2xl p-12
        flex flex-col md:flex-row items-center
        justify-between gap-10 overflow-hidden">

          {/* Decorative accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72
            bg-accent/5 rounded-full blur-3xl" />

          {/* Text */}
          <div className="relative max-w-xl">
            <span className="inline-block mb-4 text-sm font-medium
              text-accent tracking-wide uppercase">
              Peta Proyek
            </span>

            <h2 className="text-3xl font-semibold mb-4 leading-snug text-foreground">
              Eksplorasi Lokasi Survey <br />
              Dan Hasil Proyek Kami
            </h2>

            <p className="text-muted leading-relaxed">
              Jelajahi peta interaktif kami untuk menemukan lokasi survey dan
              hasil proyek yang telah kami selesaikan. Dapatkan wawasan mendalam
              tentang dampak nyata dari pekerjaan kami di berbagai wilayah.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/map"
            className="relative inline-flex items-center justify-center
            bg-accent-orange text-accent-orange-foreground
            px-8 py-4 rounded-full
            hover:bg-accent-orange/90 transition
            text-sm font-medium whitespace-nowrap shadow-lg hover:shadow-xl"
          >
            Lihat Peta Proyek
          </Link>

        </div>

      </div>
    </section>
  );
}
