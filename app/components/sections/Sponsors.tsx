import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {[
            { name: "Universitas Pendidikan Indonesia", logo: "/sponsor/UPI.png" },
            { name: "Fakultas Pendidikan Ilmu Pengetahuan Sosial", logo: "/sponsor/FPIPS.png" },
            { name: "Survei Pemetaan dan Informasi Geografis", logo: "/sponsor/SPIG.png" },
            { name: "Magang Berdampak", logo: "/sponsor/MBER.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-center
              bg-white border border-border rounded-2xl
              h-28 p-6 transition
              hover:shadow-md"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={80}
                className="object-contain grayscale
                transition group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
