import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { projects } from "./data/projects";
import { whatsappUrl } from "./data/contact";

const focusAreas = [
  { number: "01", title: "Web", detail: "Membangun pengalaman web yang jelas dan responsif." },
  { number: "02", title: "Android", detail: "Mengeksplorasi aplikasi untuk perangkat mobile." },
  { number: "03", title: "Backend", detail: "Belajar merancang layanan dan mengelola data." },
  { number: "04", title: "Komputasi paralel & terdistribusi", detail: "Mendalami konsep pemrosesan paralel dan sistem terdistribusi." },
];

export default function Home() {
  const featured = projects.find((project) => project.status !== "Rencana");

  return <>
    <Sidebar />
    <main className="min-h-screen bg-[#f7f7f3] text-[#19211e] md:pl-64">
      <section className="relative overflow-hidden border-b border-[#e2e5de] bg-[#f7f7f3]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-52 h-[34rem] w-[34rem] rounded-full border border-emerald-900/10 sm:-right-20 sm:-top-48" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-28 h-[25rem] w-[25rem] rounded-full border border-emerald-900/10 sm:right-8" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[calc(100svh-2rem)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-16 lg:py-24">
          <div className="relative z-10">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800"><span className="h-px w-8 bg-emerald-700" />Portofolio · Bandung, Indonesia</p>
            <h1 className="mt-8 max-w-4xl text-[clamp(3.1rem,7.2vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
              Merancang dan membangun <span className="text-emerald-800">pengalaman digital.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#626a64] sm:text-lg">
              Saya Ari Rizal Firmansyah, lulusan Teknik Informatika yang senang belajar lewat proyek nyata. Saat ini saya mengembangkan kemampuan di bidang web, Android, dan backend.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-900 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800">Jelajahi proyek <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></Link>
              <Link href="/kontak" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cfd5ce] bg-white/60 px-6 text-sm font-semibold text-[#26332c] transition hover:border-emerald-800 hover:bg-white hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800">Hubungi saya</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-5 border-t border-[#dfe3dc] pt-6">
              <div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#818980]">Pendidikan</p><p className="mt-1.5 text-sm font-medium">Teknik Informatika</p></div>
              <div className="max-w-sm"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#818980]">Fokus belajar</p><ul className="mt-2 flex flex-wrap gap-1.5"><li className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-[#4d5a51]">Web</li><li className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-[#4d5a51]">Android</li><li className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-[#4d5a51]">Backend</li><li className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-[#4d5a51]">Komputasi paralel &amp; terdistribusi</li></ul></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto lg:mr-2">
            <div aria-hidden="true" className="absolute -inset-5 rotate-3 rounded-[2.25rem] border border-emerald-900/15" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#173d32] p-3 shadow-2xl shadow-emerald-950/15 sm:p-4">
              {featured?.screenshots[0] ? <div className="relative aspect-[1.16/1] overflow-hidden rounded-[1.2rem] bg-[#e6ebe4]">
                <Image src={featured.screenshots[0].src} alt={featured.screenshots[0].alt} fill priority sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 35vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12241d]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  <div className="flex items-center justify-between gap-3"><span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100">Karya pilihan</span><span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[11px] backdrop-blur">{featured.status ?? featured.category}</span></div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{featured.title}</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">{featured.description}</p>
                  <Link href={"/projects/" + featured.slug} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-200">Lihat studi kasus <span aria-hidden="true">↗</span></Link>
                </div>
              </div> : <div className="flex aspect-[1.16/1] flex-col justify-between rounded-[1.2rem] bg-[#e6ebe4] p-7"><span className="text-xs uppercase tracking-widest text-emerald-800">Karya pilihan</span><span className="text-3xl font-semibold text-emerald-950">{featured?.title ?? "Proyek sedang disiapkan"}</span></div>}
              <div className="flex items-center justify-between px-2 pb-1 pt-4 text-white/80 sm:px-3"><span className="text-xs tracking-[0.16em]">ARI RIZAL FIRMANSYAH</span><span className="text-xs text-emerald-200">01 / 0{projects.length}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="border-b border-[#e2e5de] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-24">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">Tentang saya</p><h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Rasa ingin tahu, diwujudkan menjadi karya.</h2><Link href="/profil" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">Kenali saya lebih dekat <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></Link></div>
          <div><p className="text-lg leading-8 text-[#58625b]">Saya percaya cara terbaik untuk bertumbuh adalah membuat sesuatu, mengujinya, lalu memperbaikinya. Portofolio ini adalah ruang untuk mendokumentasikan proses tersebut—dari ide, keputusan teknis, hingga hasil yang bisa digunakan.</p><div className="mt-8 flex flex-wrap gap-2">{["Next.js", "TypeScript", "Kotlin", "Spring Boot"].map((item) => <span key={item} className="rounded-full border border-[#dfe3dc] bg-[#f7f7f3] px-4 py-2 text-xs font-medium text-[#4a554d]">{item}</span>)}</div></div>
        </div>
      </section>

      <section id="fokus" className="border-b border-[#e2e5de]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">Arah pengembangan</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Hal yang sedang saya tekuni</h2></div><p className="max-w-md text-sm leading-7 text-[#697169]">Bidang yang saya eksplorasi melalui proyek pribadi dan pembelajaran berkelanjutan.</p></div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{focusAreas.map((area) => <article key={area.number} className="group rounded-2xl border border-[#e0e4dc] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-800/40 hover:shadow-lg hover:shadow-emerald-950/[0.05] sm:p-7"><span className="text-xs font-semibold tabular-nums tracking-[0.16em] text-emerald-800">{area.number} / 03</span><h3 className="mt-8 text-2xl font-semibold tracking-tight">{area.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#697169]">{area.detail}</p><span aria-hidden="true" className="mt-7 block h-px w-10 bg-emerald-800 transition-all duration-200 group-hover:w-16" /></article>)}</div>
          <div className="mt-6 flex flex-col justify-between gap-6 rounded-3xl bg-[#edf2ec] p-6 sm:flex-row sm:items-center sm:p-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">Profil untuk rekruter</p><h3 className="mt-2 text-xl font-semibold">Pendidikan, proyek, dan teknologi.</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#697169]">Ringkasan Teknik Informatika UKRI, proyek Laravel/PHP saat magang, aplikasi Flutter, dan fokus komputasi paralel serta terdistribusi.</p></div>
            <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end"><a href="/cv-ari-rizal-firmansyah.pdf" download="CV-Ari-Rizal-Firmansyah.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-900 px-6 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800">Unduh CV PDF <span aria-hidden="true">↓</span></a><span className="text-xs text-[#697169]">Satu halaman · siap ditinjau</span></div>
          </div>
        </div>
      </section>

      <section id="kontak" className="bg-[#173d32] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 sm:px-10 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">Mari terhubung</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Ada ide atau ingin berdiskusi?</h2><p className="mt-3 text-sm leading-6 text-white/70">Saya terbuka untuk percakapan seputar proyek dan teknologi.</p></div>
          <div className="flex flex-wrap gap-3"><a href="mailto:primasampurna9@gmail.com" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Kirim email <span className="ml-2" aria-hidden="true">↗</span></a><a href="https://github.com/prime-eng" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">GitHub <span className="ml-2" aria-hidden="true">↗</span></a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">WhatsApp <span className="ml-2" aria-hidden="true">↗</span></a></div>
        </div>
        <footer className="border-t border-white/15"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"><span>© 2026 Ari Rizal Firmansyah</span><span>Dibuat dengan Next.js · TypeScript</span></div></footer>
      </section>
    </main>
  </>;
}
