export default function Internship() {
  return (
    <section
      id="internship"
      className="py-24 bg-surface border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Content */}
        <div>
          <span
            className="inline-block mb-4 text-sm font-medium
            text-accent tracking-wide uppercase"
          >
            Program Magang
          </span>

          <h2 className="text-3xl font-semibold mb-6 leading-snug text-foreground">
            Pengalaman Praktis <br />
            di Bidang Pemetaan dan Geodesi
          </h2>

          <p className="text-muted leading-relaxed mb-4">
            Program magang ini dilaksanakan sebagai bagian dari
            pemenuhan kebutuhan akademik mahasiswa untuk memperoleh
            pengalaman kerja secara langsung di bidang pemetaan,
            survei geodesi, dan pengolahan data geospasial.
          </p>

          <p className="text-muted leading-relaxed">
            Selama pelaksanaan magang, peserta terlibat dalam kegiatan
            survei lapangan, pengolahan data hasil pengukuran, serta
            pembuatan dan visualisasi peta dengan bimbingan tenaga
            profesional di perusahaan.
          </p>
        </div>

        {/* RIGHT: Info Card */}
        <div className="relative">
          {/* Accent layer */}
          <div
            className="absolute -top-4 -right-4 w-full h-full
            bg-accent/10 rounded-2xl"
          />

          <div
            className="relative bg-background border border-border/20
            rounded-2xl p-8"
          >
            <ul className="space-y-5 text-sm">
              <li className="flex justify-between">
                <span className="text-muted">Durasi Magang</span>
                <span className="font-medium text-foreground">
                  4 Bulan
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">Perusahaan</span>
                <span className="font-medium text-foreground">
                  PT. Tortuga Xcel Dynamics
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">Bidang</span>
                <span className="font-medium text-foreground">
                  Geodesi & Pemetaan
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">Peserta</span>
                <span className="font-medium text-foreground">
                  Tim Magang
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
