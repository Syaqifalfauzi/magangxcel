export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Company */}
          <div>
            <h3 className="text-accent font-semibold mb-3">
              PT. Tortuga Xcel Dynamics
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Perusahaan yang bergerak di bidang survei geodesi,
              pemetaan geospasial, serta pengolahan data spasial
              untuk mendukung perencanaan dan pengembangan
              infrastruktur.
            </p>
          </div>

          {/* Internship Info */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">
              Program Magang
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Bidang: Geodesi dan Pemetaan</li>
              <li>Durasi: 4 Bulan</li>
              <li>Peserta: Tim Magang</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted hover:text-accent transition"
                >
                  Tentang Perusahaan
                </a>
              </li>
              <li>
                <a
                  href="#internship"
                  className="text-muted hover:text-accent transition"
                >
                  Program Magang
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-muted hover:text-accent transition"
                >
                  Kegiatan
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="text-muted hover:text-accent transition"
                >
                  Peta Proyek
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/10 pt-6 text-sm text-muted flex flex-col md:flex-row justify-between gap-4">
          <span>
            © 2025 PT. Tortuga Xcel Dynamics · Program Magang
          </span>
          <span>
            Dikembangkan sebagai bagian dari dokumentasi akademik
            kegiatan magang
          </span>
        </div>

      </div>
    </footer>
  );
}
