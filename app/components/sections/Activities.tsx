export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span
            className="inline-block mb-4 text-sm font-medium
            text-accent tracking-wide uppercase"
          >
            Kegiatan
          </span>

          <h2 className="text-3xl font-semibold mb-4 leading-snug text-foreground">
            Kegiatan Magang & <br />
            Ruang Lingkup Pekerjaan
          </h2>

          <p className="text-muted leading-relaxed">
            Selama pelaksanaan program magang, peserta terlibat dalam
            berbagai kegiatan yang berkaitan dengan survei geodesi,
            pemetaan, serta pengolahan data geospasial sesuai dengan
            kebutuhan proyek perusahaan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Survei Topografi",
              desc: "Pelaksanaan pengukuran lapangan untuk memperoleh data elevasi, kontur, dan kondisi permukaan tanah sebagai dasar pemetaan.",
            },
            {
              title: "Pemetaan GIS",
              desc: "Pengolahan dan visualisasi data spasial menggunakan perangkat lunak Sistem Informasi Geografis (SIG).",
            },
            {
              title: "Pengolahan Data",
              desc: "Perhitungan koordinat, koreksi, serta validasi data hasil pengukuran survei.",
            },
            {
              title: "Penyusunan Peta",
              desc: "Pembuatan layout peta dan visualisasi kartografis sebagai bahan dokumentasi dan pelaporan.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-surface border border-border/20
              rounded-2xl p-8 transition
              hover:shadow-md"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center
                rounded-lg bg-accent/10 text-accent"
              >
                <div className="h-4 w-4 bg-accent rounded-sm" />
              </div>

              <h3 className="text-foreground font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
