"use client";

import Image from "next/image";

type FileItem = {
    image: string;
    pdf?: string;
};

export default function ProjectFiles({
    files,
    title,
}: {
    files: FileItem[];
    title: string;
}) {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Pratinjau Hasil Pemetaan</h2>

            <p className="text-sm text-muted mb-6">
                Klik pada gambar pratinjau untuk mengunduh dokumen hasil pemetaan dalam
                format PDF (jika tersedia).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {files.map((file, index) => (
                    <a
                        key={index}
                        href={file.pdf || "#"}
                        download={!!file.pdf}
                        target={file.pdf ? "_blank" : undefined}
                        rel={file.pdf ? "noopener noreferrer" : undefined}
                        className={`group block relative ${!file.pdf ? "cursor-default" : ""
                            }`}
                        onClick={(e) => !file.pdf && e.preventDefault()}
                    >
                        <div
                            className="relative w-full overflow-hidden
                    rounded-2xl border border-border bg-surface"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={file.image}
                                    alt={`Pratinjau ${index + 1} - ${title}`}
                                    fill
                                    className="object-contain p-4 transition-transform
                        group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* Overlay - Only show if PDF exists */}
                            {file.pdf && (
                                <div
                                    className="absolute inset-0 bg-black/40 opacity-0
                        group-hover:opacity-100 transition
                        flex items-center justify-center"
                                >
                                    <span
                                        className="px-6 py-3 rounded-full
                          bg-white text-sm font-medium text-primary"
                                    >
                                        Unduh PDF
                                    </span>
                                </div>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
