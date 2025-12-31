"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";


// FIX icon leaflet default (Next.js issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
/* =========================
   AUTO FOCUS + POPUP
   ========================= */
function MapController({
  selected,
  markerRefs,
}: {
  selected?: Project | null;
  markerRefs: React.MutableRefObject<
    Record<number, L.Marker | null>
  >;
}) {
  const map = useMap();

  useEffect(() => {
    if (!selected) return;

    const marker = markerRefs.current[selected.id];

    map.flyTo(
      [selected.latitude, selected.longitude],
      13,
      { animate: true, duration: 1.2 }
    );

    // buka popup setelah animasi dikit
    setTimeout(() => {
      marker?.openPopup();
    }, 600);
  }, [selected, map, markerRefs]);

  return null;
}

/* =========================
   MAP VIEW
   ========================= */
export default function MapView({
  projects,
  selected,
}: {
  projects: Project[];
  selected?: Project | null;
}) {
  const markerRefs = useRef<
    Record<number, L.Marker | null>
  >({});

  return (
    <MapContainer
      center={[-7.0, 107.6]}
      zoom={8}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Controller */}
      <MapController
        selected={selected}
        markerRefs={markerRefs}
      />

      {projects.map((project) => (
<Marker
  key={project.id}
  position={[project.latitude, project.longitude]}
  ref={(ref) => {
    markerRefs.current[project.id] = ref;
  }}
>
<Popup
  maxWidth={260}
  autoPan
  autoPanPadding={[40, 40]}
>
  <div className="text-sm space-y-2">
    <Link
      href={`/projects/${project.id}`}
      className="font-semibold text-primary
      hover:underline leading-snug block"
    >
      {project.title}
    </Link>

    <div className="text-xs text-muted space-y-1">
      <p>
        <span className="font-medium">Tipe:</span>{" "}
        {project.type}
      </p>
      <p>
        <span className="font-medium">Lokasi:</span>{" "}
        {project.location}
      </p>
    </div>
  </div>
</Popup>

        </Marker>
      ))}
    </MapContainer>
  );
}
