import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import DecorativeBackground from "../DecorativeBackground";
import Sidebar from "../Sidebar";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const featured = projects.find((project) => project.status === "Sedang dibangun") ?? projects[0];
  const otherProjects = projects.filter((project) => project.slug !== featured?.slug && project.status !== "Rencana");
  const plannedProjects = projects.filter((project) => project.status === "Rencana");

  return <>
    <Sidebar />
    <main className="relative isolate min-h-screen bg-[#f7f7f3] px-6 py-8 text-[#19211e] md:pl-64 md:px-10 lg:px-14">
      <DecorativeBackground />
      <section className="relative mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: "Proyek" }]} />
        <header className="flex flex-col justify-between gap-6 border-b border-[#dfe3dc] pb-9 sm:flex-row sm:items-end">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">Karya dan eksperimen</p><h1 className="mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl">Proyek yang saya bangun.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-[#626a64]">Kumpulan proyek web dan mobile. Buka tiap proyek untuk melihat deskripsi, teknologi, dan perkembangan yang tersedia.</p></div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dfe3dc] bg-white px-4 py-2 text-sm text-[#526057]"><span className="h-2 w-2 rounded-full bg-emerald-600" />{projects.length - plannedProjects.length} proyek</span>
        </header>

        {featured && <section className="mt-9">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Pilihan utama</p>
          <article className="group grid overflow-hidden rounded-[2rem] border border-[#e0e4dc] bg-white lg:grid-cols-[1.08fr_0.92fr]">
            <Link href={"/projects/" + featured.slug} className="relative block min-h-64 overflow-hidden bg-[#e7ece6] sm:min-h-80 lg:min-h-[27rem]" aria-label={"Buka proyek " + featured.title}>
              {featured.screenshots[0] ? <Image src={featured.screenshots[0].src} alt={featured.screenshots[0].alt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" /> : <div className="absolute inset-0 flex items-end bg-emerald-900 p-8 text-3xl font-semibold text-white">{featured.title}</div>}
              <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">{featured.category}</span>
            </Link>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-600" /><span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">{featured.status ?? featured.category}</span></div>
              <p className="mt-7 text-xs font-medium tracking-[0.16em] text-gray-400">PROYEK {featured.number}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 leading-7 text-[#626a64]">{featured.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">{featured.technologies.map((technology) => <li key={technology} className="rounded-full bg-[#f1f4ef] px-3 py-1.5 text-xs text-[#4d5a51]">{technology}</li>)}</ul>
              <Link href={"/projects/" + featured.slug} className="group/link mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-emerald-900 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800">Lihat detail proyek <span aria-hidden="true" className="transition group-hover/link:translate-x-1">→</span></Link>
            </div>
          </article>
        </section>}

        {otherProjects.length > 0 && <section className="mt-14"><div className="flex items-end justify-between gap-4 border-b border-[#dfe3dc] pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Mobile · Flutter</p><h2 className="mt-2 text-2xl font-semibold">Aplikasi lainnya</h2></div><span className="text-sm text-gray-500">{otherProjects.length} proyek</span></div><div className="mt-5 grid gap-4 md:grid-cols-2">{otherProjects.map((project) => <Link key={project.slug} href={"/projects/" + project.slug} className="group flex min-h-56 flex-col justify-between rounded-2xl border border-[#e0e4dc] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-800/40 hover:shadow-lg sm:p-7"><div className="flex items-start justify-between gap-4"><span className="rounded-full bg-[#eff4ef] px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-emerald-900">{project.category}</span><span className="text-sm text-gray-400">0{project.number}</span></div><div className="mt-8"><h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-[#697169]">{project.description}</p><div className="mt-5 flex items-center justify-between border-t border-[#e7eae4] pt-4"><span className="text-xs text-gray-500">{project.technologies.join(" · ")}</span><span className="text-sm font-semibold text-emerald-800 transition group-hover:translate-x-1">Lihat detail →</span></div></div></Link>)}</div></section>}

        {plannedProjects.length > 0 && <section className="mt-14 border-t border-[#dfe3dc] pt-9"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Arah selanjutnya</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Dalam perencanaan</h2></div><p className="max-w-md text-sm leading-6 text-[#697169]">Ide yang belum mulai dikerjakan. Detailnya akan diperbarui saat pengembangan dimulai.</p></div><div className="mt-5 grid gap-3 md:grid-cols-2">{plannedProjects.map((project) => <article key={project.slug} className="rounded-2xl border border-dashed border-[#cfd7ce] bg-white/70 p-6"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold tracking-[0.16em] text-emerald-800">{project.category}</span><span className="rounded-full bg-[#eff1ed] px-3 py-1 text-xs text-gray-600">Rencana</span></div><h3 className="mt-4 text-xl font-semibold">{project.title}</h3><p className="mt-2 text-sm leading-6 text-[#697169]">{project.description}</p><ul className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full border border-[#dfe3dc] px-3 py-1 text-xs text-gray-600">{technology}</li>)}</ul></article>)}</div></section>}
        <footer className="mt-14 border-t border-[#dfe3dc] py-6 text-sm text-gray-500">Punya ide untuk didiskusikan? <Link href="/kontak" className="font-semibold text-emerald-800 hover:underline">Hubungi saya →</Link></footer>
      </section>
    </main>
  </>;
}
