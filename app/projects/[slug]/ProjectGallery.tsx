"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectScreenshot } from "../../data/projects";

export default function ProjectGallery({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : (index + 1) % screenshots.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : (index - 1 + screenshots.length) % screenshots.length);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, screenshots.length]);

  return (
    <>
      {screenshots.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={"Perbesar gambar: " + screenshot.alt}
              className="group overflow-hidden rounded-2xl border border-[#dfe3dc] bg-[#f7f7f3] text-left transition hover:border-emerald-800/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
            >
              <span className="relative block aspect-video overflow-hidden">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#10281e]/0 text-sm font-semibold text-white opacity-0 transition group-hover:bg-[#10281e]/35 group-hover:opacity-100">Klik untuk memperbesar</span>
              </span>
              <span className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="text-sm text-[#697169]">{screenshot.alt}</span>
                <span className="shrink-0 text-xs font-semibold text-emerald-800">Perbesar ↗</span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex min-h-36 items-center justify-center rounded-2xl border border-dashed border-[#cfd7ce] bg-[#f7f7f3] px-6 text-center text-sm leading-6 text-gray-500">
          Galeri akan ditambahkan setelah ada tampilan proyek yang dapat dibagikan.
        </div>
      )}

      {activeIndex !== null && screenshots[activeIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07110d]/90 p-4 backdrop-blur-sm sm:p-8">
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau gambar galeri"
            className="relative flex max-h-full w-full max-w-6xl flex-col"
          >
            <div className="relative h-[min(72vh,800px)] w-full">
              <Image
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-1 pt-4 text-white">
              <p className="text-sm leading-6 text-white/80">{screenshots[activeIndex].alt}</p>
              <p className="shrink-0 text-xs tabular-nums text-white/55">{String(activeIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Tutup gambar"
              className="absolute -right-1 -top-1 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#173d32]/90 text-white shadow-lg transition duration-300 hover:rotate-180 hover:scale-110 hover:bg-white hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:-right-5 sm:-top-5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12" /></svg>
            </button>

            {screenshots.length > 1 && (
              <>
                <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + screenshots.length) % screenshots.length)} aria-label="Gambar sebelumnya" className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-xl text-white transition hover:bg-white hover:text-emerald-950 sm:-left-14">‹</button>
                <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % screenshots.length)} aria-label="Gambar berikutnya" className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-xl text-white transition hover:bg-white hover:text-emerald-950 sm:-right-14">›</button>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
