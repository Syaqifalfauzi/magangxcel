"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { projects, Project } from "../../data/projects";
import ProjectSidebar from "../components/map/ProjectSidebar";


const MapView = dynamic(
  () => import("../components/map/MapView"),
  { ssr: false }
);

export default function MapPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <Navbar />

      <main className="pt-20 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-6 max-w-2xl">
            <h1 className="text-3xl font-semibold mb-2 text-foreground">
              Peta Lokasi Proyek
            </h1>
            <p className="text-muted">
              Peta interaktif ini menyajikan informasi lokasi survei dan
              kegiatan proyek pemetaan yang dilakukan selama pelaksanaan
              program magang di bidang geodesi dan geospasial.
            </p>
          </div>

          {/* Layout */}
          <div
            className="
  grid grid-cols-1 md:grid-cols-12
  border border-border rounded-2xl overflow-hidden
  min-h-[80vh] md:h-[70vh]
  "
          >

            {/* Sidebar */}
            <div
              className="
    md:col-span-4 lg:col-span-3
    border-b md:border-b-0 md:border-r border-border
    max-h-[40vh] md:max-h-full
    overflow-y-auto
    "
            >              <ProjectSidebar
                projects={projects}
                selectedId={selected?.id}
                onSelect={setSelected}
              />
            </div>

            {/* Map */}
            <div
              className="
    md:col-span-8 lg:col-span-9
    h-[50vh] md:h-full
    "
            >              <MapView
                projects={projects}
                selected={selected}
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
