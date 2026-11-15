import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Sidebar from "../../Sidebar";
import Breadcrumbs from "../../Breadcrumbs";
import DecorativeBackground from "../../DecorativeBackground";
import ProjectGallery from "./ProjectGallery";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description, openGraph: { title: project.title, description: project.description, type: "article" } };
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <>
    <Sidebar />
    <Suspense fallback={<main className="min-h-screen bg-[#f7f7f3] px-6 py-16 text-gray-600 md:pl-64">Memuat detail proyek...</main>}>
      <ProjectDetails params={params} />
    </Suspense>
  </>;
}

async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="relative isolate min-h-screen bg-[#f7f7f3] px-6 py-8 text-[#19211e] md:pl-64 md:px-10 lg:px-14">
    <DecorativeBackground />
    <article className="relative mx-auto max-w-6xl">
      <Breadcrumbs items={[{ label: "Proyek", href: "/projects" }, { label: project.title }]} />
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:underline"><span aria-hidden="true">←</span> Semua proyek</Link>
      <header className="mt-7 overflow-hidden rounded-[2rem] bg-[#173d32] text-white">
        <div className="grid lg:grid-cols-[1fr_0.82fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3"><span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">{project.category}</span>{project.status && <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">{project.status}</span>}</div>
            <p className="mt-9 text-xs tracking-[0.18em] text-white/50">PROYEK {project.number}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{project.description}</p>
            <ul className="mt-7 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/85">{technology}</li>)}</ul>
            {(project.demoUrl || project.repositoryUrl) && <div className="mt-8 flex flex-wrap gap-3">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100">Lihat demo ↗</a>}{project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Kode sumber ↗</a>}</div>}
          </div>
          <div className="relative min-h-64 overflow-hidden border-t border-white/10 bg-[#244f41] lg:min-h-[30rem] lg:border-l lg:border-t-0">
            {project.screenshots[0] ? <Image src={project.screenshots[0].src} alt={project.screenshots[0].alt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /> : <div className="absolute inset-0 flex flex-col justify-between bg-[radial-gradient(circle_at_75%_25%,rgba(167,243,208,0.2),transparent_30%),linear-gradient(145deg,#244f41,#173d32)] p-8"><span className="text-xs uppercase tracking-[0.2em] text-emerald-100/70">{project.category}</span><span className="text-3xl font-semibold text-white/90">{project.title}</span><span className="text-sm text-white/50">Tangkapan layar proyek belum ditambahkan.</span></div>}
          </div>
        </div>
      </header>

      {(project.objective || project.contribution) && (
        <section className="mt-12 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">01 / Tujuan</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Mengapa proyek ini dibuat</h2></div>
          <div className="border-l-2 border-emerald-800/20 pl-5 sm:pl-7">{project.objective && <p className="text-lg leading-8 text-[#58625b]">{project.objective}</p>}{project.contribution && <p className="mt-5 text-sm leading-7 text-[#697169]">{project.contribution}</p>}</div>
        </section>
      )}

      {(project.features?.length ?? 0) > 0 && (
        <section className="mt-12 border-t border-[#dfe3dc] pt-9">
          <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">02 / Cakupan</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Fitur dan bagian proyek</h2></div><span className="text-sm text-gray-400">{String(project.features!.length).padStart(2, "0")} item</span></div>
          <ol className="mt-5 divide-y divide-[#e2e5de] border-y border-[#e2e5de]">{project.features!.map((feature, index) => <li key={feature} className="grid gap-2 py-5 sm:grid-cols-[4rem_1fr] sm:items-center"><span className="text-sm font-semibold tabular-nums text-emerald-800">0{index + 1}</span><span className="text-base text-[#4e5951]">{feature}</span></li>)}</ol>
        </section>
      )}

      <section className="mt-12 rounded-[2rem] border border-[#dfe3dc] bg-white p-6 sm:p-9">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">03 / Galeri</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Tampilan proyek</h2></div><p className="text-sm text-gray-500">{project.screenshots.length ? project.screenshots.length + " gambar" : "Belum ada gambar"}</p></div>
        <ProjectGallery screenshots={project.screenshots} />
      </section>
      <footer className="mt-12 flex flex-col gap-4 border-t border-[#dfe3dc] py-6 sm:flex-row sm:items-center sm:justify-between"><Link href="/projects" className="text-sm font-semibold text-emerald-800 hover:underline">← Kembali ke semua proyek</Link><Link href="/kontak" className="text-sm font-semibold text-emerald-800 hover:underline">Diskusikan proyek ini →</Link></footer>
    </article>
  </main>;
}
