import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 bg-background overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96
        bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2
        gap-16 px-6 items-center">

        {/* LEFT: Text */}
        <div>
          <span className="inline-block mb-4 text-sm font-medium
            text-accent tracking-wide uppercase">
            PT.Tortuga Xcel Dynamics
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-foreground">
            Program Magang Berdampak <br />
            Di Drafter & Surveyor
          </h1>

          <p className="text-muted max-w-xl mb-10 leading-relaxed">
            Website ini di buat untuk menampilkan hasil dari kegiatan magang
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/map"
              className="inline-flex items-center justify-center
              bg-accent-orange text-accent-orange-foreground
              px-8 py-4 rounded-full
              hover:bg-accent-orange/90 transition
              text-sm font-medium shadow-lg hover:shadow-xl"
            >
              Lihat Peta Proyek
            </Link>

            <Link
              href="#about"
              className="text-sm font-medium text-accent
              hover:text-accent/80 hover:underline"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>

        {/* RIGHT: Visual */}
        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4
            bg-accent/10 rounded-2xl" />

          <div className="relative bg-surface h-80 md:h-96
                      rounded-2xl border border-border/20 overflow-hidden
                      flex items-center justify-center text-muted">
            <Image
              src="/team/squad.png"
              alt="Company Activity"
              fill
              className="object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
