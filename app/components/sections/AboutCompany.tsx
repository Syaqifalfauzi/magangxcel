import Image from "next/image";

export default function AboutCompany() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT: Visual */}
        {/* LEFT: Visual */}
        <div className="relative">
          {/* Accent layer */}
          <div className="absolute -top-6 -left-6 w-full h-full
            bg-accent/5 rounded-2xl" />

          {/* Main image / placeholder */}
          <div className="relative bg-background h-80 md:h-96
            rounded-2xl border border-border/20 overflow-hidden
            flex items-center justify-center text-muted">
            {/* Replace with Image later */}
            Company / Survey Activity

            <Image
              src="/team/XCEL.png"
              alt="Company Activity"
              fill
              className="object-cover"
            />

          </div>
        </div>

        {/* RIGHT: Content */}
        <div>
          <span className="inline-block mb-4 text-sm font-medium
            text-accent tracking-wide uppercase">
            Tentang Perusahaan
          </span>

          <h2 className="text-3xl font-semibold mb-6 leading-snug text-foreground">
            Pertambangan & Energi <br />
            Konstruksi & Infrastruktur <br />
            Perkebunan & Agrikultur
          </h2>

          <p className="text-muted leading-relaxed mb-6">
            Sebagai mitra teknologi berbasis data, XCEL hadir untuk membantu berbagai sektor melihat lebih jelas, merencanakan lebih cermat, dan bertindak lebih tepat. Kami menggabungkan presisi, inovasi, dan kolaborasi untuk mendorong efisiensi, keberlanjutan, dan kepercayaan dalam setiap solusi yang kami hadirkan.
          </p>

          {/* Key points */}
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span className="text-muted">
                Pertambangan & Energi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span className="text-muted">
                Konstruksi & Infrastruktur
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span className="text-muted">
                Perkebunan & Agrikultur
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
