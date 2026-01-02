export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 bg-surface border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span
            className="inline-block mb-4 text-sm font-medium
            text-accent tracking-wide uppercase"
          >
            Ringkasan
          </span>

          <h2 className="text-3xl font-semibold mb-4 leading-snug text-foreground">
            Ringkasan Program <br />
            Magang
          </h2>

          <p className="text-muted leading-relaxed">
            Gambaran umum pelaksanaan program magang berdasarkan
            jumlah kegiatan survei, aktivitas yang dilakukan,
            durasi magang, serta keterlibatan tim.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: "4", label: "Lokasi Survei" },
            { value: "9", label: "Jenis Aktivitas" },
            { value: "4 Bulan", label: "Durasi Magang" },
            { value: "8 Orang", label: "Anggota Tim" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border/20
              rounded-2xl p-8 text-center
              hover:shadow-sm transition"
            >
              <div className="text-3xl font-semibold text-accent mb-2">
                {item.value}
              </div>
              <div className="text-muted text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
