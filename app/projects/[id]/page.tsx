import { projects } from "@/data/projects";
import { members } from "@/data/members";
import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProjectFiles from "../../components/project/ProjectFiles";
// ⬇️ nanti kalau sudah ada
import ModelViewer from "../../components/project/ModelViewer";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="pt-24 px-6 text-center text-muted">
        Proyek tidak ditemukan
      </div>
    );
  }

  const projectMembers = members.filter((m) =>
    project.memberIds.includes(m.id)
  );

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-background">
        <div className="max-w-5xl mx-auto px-6 space-y-14">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold mb-3 text-foreground">
              {project.title}
            </h1>
            <p className="text-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <span className="font-medium text-foreground">Jenis Kegiatan</span>
              <p className="text-muted">{project.type}</p>
            </div>
            <div>
              <span className="font-medium text-foreground">Lokasi</span>
              <p className="text-muted">{project.location}</p>
            </div>
            {project.surveyDate && (
              <div>
                <span className="font-medium text-foreground">
                  Tanggal Survei
                </span>
                <p className="text-muted">{project.surveyDate}</p>
              </div>
            )}
          </div>

          {/* Team */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-foreground">
              Tim Pelaksana Proyek
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {projectMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-border rounded-2xl p-5
                  text-center hover:shadow-md transition"
                >
                  <div
                    className="relative w-full mb-4 rounded-xl
                    bg-surface flex items-center justify-center
                    aspect-[3/4]"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted">{member.nim}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preview Hasil Proyek (project lama & baru) */}
          <div>
            <ProjectFiles
              files={project.files}
              title={project.title}
            />
          </div>

          {/* ===================== */}
          {/* SUB-BAB / SECTIONS */}
          {/* ===================== */}
          {project.sections && (
            <div className="space-y-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Sub Kegiatan Penelitian
              </h2>

              {project.sections.map((section, index) => (
                <div
                  key={index}
                  className="border border-border rounded-2xl p-6 space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-muted leading-relaxed ">
                      {section.description}
                    </p>
                  </div>

                  {/* Photos */}
                  {section.photos && section.photos.length > 0 && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {section.photos.map((img, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${section.title} ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3D Objects */}
                  {section.objects3d && section.objects3d.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">
                        Model 3D Terumbu Karang
                      </h4>

                      {/* Kalau sudah ada viewer */}
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {section.objects3d.map((obj, i) => (
                          <ModelViewer key={i} src={obj} />
                        ))}
                      </div>
                     
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
