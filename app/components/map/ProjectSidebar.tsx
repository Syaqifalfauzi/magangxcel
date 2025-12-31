import { Project } from "../../../data/projects";
import { members } from "@/data/members";

type Props = {
  projects: Project[];
  selectedId?: number | null;
  onSelect: (project: Project) => void;
};

export default function ProjectSidebar({
  projects,
  selectedId,
  onSelect,
}: Props) {
  return (
    <aside className="h-full bg-background border-r border-border overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-border sticky top-0 bg-background z-10">
        <h2 className="font-semibold text-accent">
          Daftar Proyek
        </h2>
        <p className="text-xs text-muted">
          Klik pada sebuah proyek untuk melihat lokasinya di peta.
        </p>
      </div>

      <ul className="divide-y divide-border">
        {projects.map((project) => {
          // 🔑 resolve anggota dari master data
          const projectMembers = members.filter((m) =>
            project.memberIds.includes(m.id)
          );

          return (
            <li
              key={project.id}
              onClick={() => onSelect(project)}
              className={`p-4 cursor-pointer transition
              hover:bg-surface/50
              ${selectedId === project.id
                  ? "bg-surface border-l-4 border-accent"
                  : ""
                }`}
            >
              {/* Judul */}
              <h3 className="text-sm font-medium text-foreground">
                {project.title}
              </h3>

              {/* Jenis */}
              <p className="text-xs text-muted mt-1">
                {project.type}
              </p>

              {/* Anggota */}
              <div className="flex flex-wrap gap-1 mt-2">
                {projectMembers.map((m) => (
                  <span
                    key={m.id}
                    className="px-2 py-[2px] text-[10px]
                    rounded-full bg-accent/10 text-accent"
                  >
                    {m.name}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
