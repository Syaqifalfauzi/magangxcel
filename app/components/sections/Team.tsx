import Image from "next/image";
import { members } from "../../../data/members";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span
            className="inline-block mb-4 text-sm font-medium
            text-accent tracking-wide uppercase"
          >
            Tim
          </span>

          <h2 className="text-3xl font-semibold mb-4 leading-snug text-foreground">
            Tim Pelaksana Magang
          </h2>

          <p className="text-muted leading-relaxed">
            Program magang ini dilaksanakan oleh mahasiswa yang
            tergabung dalam satu tim kerja dengan pembagian tugas
            sesuai bidang survei, pemetaan, dan pengolahan data
            geospasial.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-surface border border-border/20
              rounded-2xl p-6 text-center
              hover:shadow-md transition"
            >
              {/* Photo */}
              <div
                className="relative w-full mb-5 rounded-xl
                bg-background flex items-center justify-center
                aspect-[3/4]"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <h3 className="text-accent font-semibold leading-snug">
                {member.name}
              </h3>

              <p className="text-muted text-sm">
                {member.nim}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
