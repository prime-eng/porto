import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import DecorativeBackground from "../DecorativeBackground";
import Sidebar from "../Sidebar";

const focusAreas = [
  { id: "01", title: "Web", intro: "Menyusun pengalaman digital yang cepat dan mudah digunakan.", tools: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { id: "02", title: "Android", intro: "Mengeksplorasi aplikasi mobile dan pola antarmuka Android.", tools: ["Kotlin", "Jetpack Compose"] },
  { id: "03", title: "Backend", intro: "Memahami layanan aplikasi, integrasi, dan pengelolaan data.", tools: ["Spring Boot", "PostgreSQL"] },
  { id: "04", title: "Komputasi paralel & terdistribusi", intro: "Mendalami konsep pemrosesan paralel dan sistem terdistribusi.", tools: ["Komputasi paralel", "Sistem terdistribusi"] },
];

export default function ProfilPage() {
  return <>
    <Sidebar />
    <main className="relative isolate min-h-screen bg-[#f7f7f3] px-6 py-8 text-[#19211e] md:pl-64 md:px-10 lg:px-14">
      <DecorativeBackground />
      <article className="relative mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: "Profil" }]} />
        <header className="grid overflow-hidden rounded-[2rem] bg-[#173d32] text-white lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-200"><span className="h-px w-8 bg-emerald-200/70" />Tentang saya</p>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-6xl">Ari Rizal<br />Firmansyah</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">Lulusan Teknik Informatika yang tertarik pada pengembangan produk digital. Saya belajar dengan membangun proyek secara bertahap—dari merancang pengalaman pengguna sampai menyiapkannya untuk dijalankan.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100">Lihat karya <span aria-hidden="true">→</span></Link><Link href="/kontak" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10">Hubungi saya</Link></div>
          </div>
          <div className="relative flex min-h-64 flex-col justify-between overflow-hidden border-t border-white/10 bg-[#214d40] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div aria-hidden="true" className="absolute -right-14 -top-14 h-64 w-64 rounded-full border border-white/10" /><div aria-hidden="true" className="absolute -right-2 top-0 h-40 w-40 rounded-full border border-white/10" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Latar belakang</p>
            <div className="relative mt-16"><p className="text-sm text-white/55">Pendidikan</p><h2 className="mt-2 text-2xl font-semibold leading-snug">Teknik Informatika</h2><p className="mt-2 max-w-xs text-sm leading-6 text-white/70">Universitas Kebangsaan Republik Indonesia</p></div>
            <div className="relative mt-8 flex items-center gap-3 border-t border-white/15 pt-5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-200/15 text-sm font-semibold text-emerald-100">AR</span><span className="text-xs tracking-wide text-white/65">Bandung · Indonesia</span></div>
          </div>
        </header>

        <section aria-labelledby="pendidikan-title" className="mt-14 border-t border-[#dfe3dc] pt-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Pendidikan</p>
            <h2 id="pendidikan-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Tempat saya menempuh studi.</h2>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <article className="flex flex-col justify-between rounded-[1.75rem] border border-[#dfe3dc] bg-white p-7 sm:p-9">
              <div>
                <span className="inline-flex rounded-full bg-[#eff4ef] px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-emerald-900">UKRI · BANDUNG</span>
                <h3 className="mt-7 text-2xl font-semibold leading-snug tracking-tight">Universitas Kebangsaan Republik Indonesia</h3>
                <p className="mt-3 text-lg font-medium text-emerald-800">Teknik Informatika</p>
                <p className="mt-4 text-sm leading-7 text-[#697169]">Lulusan Program Studi Teknik Informatika. Saya membangun dasar pengetahuan teknologi melalui pendidikan dan melanjutkan pembelajaran lewat proyek pribadi.</p>
              </div>
              <div className="mt-8 border-t border-[#e5e8e2] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Alamat kampus</p>
                <address className="mt-2 not-italic text-sm leading-6 text-[#4f5b52]">Jl. Pelajar Pejuang 45 No. 8, Lkr. Sel., Kecamatan Lengkong, Kota Bandung, Jawa Barat.</address>
                <a href="https://www.google.com/maps?cid=2688673263436507146" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-900 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800">Buka di Google Maps <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <div className="overflow-hidden rounded-[1.75rem] border border-[#dfe3dc] bg-white p-2 shadow-sm sm:p-3">
              <iframe
                title="Peta lokasi Universitas Kebangsaan Republik Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6912886687687!2d107.62534740175845!3d-6.927455531410742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d5e53848db%3A0x255016168039280a!2sUniversitas+Kebangsaan+Republik+Indonesia!5e0!3m2!1sen!2sid!4v1667530154805!5m2!1sen!2sid"
                className="h-[22rem] w-full rounded-[1.25rem] sm:h-[25rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="px-4 py-3 text-xs leading-5 text-gray-500">Peta lokasi kampus UKRI · Bandung</p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Pendekatan</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Belajar dengan membangun.</h2></div>
          <div className="space-y-5 text-base leading-8 text-[#5f6961]"><p>Saya memilih proyek yang bisa dikerjakan bertahap, lalu menggunakan prosesnya untuk memahami teknologi dan praktik pengembangan dengan lebih baik.</p><p>Portofolio ini menjadi salah satu proyek tersebut. Saya sedang memperluas kemampuan di sisi web, Android, backend, serta komputasi paralel dan terdistribusi sambil menyempurnakan karya yang sudah dibuat.</p></div>
        </section>

        <section className="mt-16 border-t border-[#dfe3dc] pt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Minat dan fokus belajar</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Bidang yang saya tekuni</h2></div><p className="max-w-md text-sm leading-6 text-[#697169]">Area belajar dan proyek yang sedang saya kembangkan, bukan klaim tingkat keahlian.</p></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{focusAreas.map((area) => <article key={area.id} className="group rounded-2xl border border-[#e0e4dc] bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-800/40 hover:shadow-lg sm:p-7"><span className="text-xs font-semibold tracking-[0.16em] text-emerald-800">{area.id} / FOKUS</span><h3 className="mt-7 text-xl font-semibold">{area.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-[#697169]">{area.intro}</p><ul className="mt-5 flex flex-wrap gap-2">{area.tools.map((tool) => <li key={tool} className="rounded-full bg-[#f1f4ef] px-3 py-1.5 text-xs text-[#4d5a51]">{tool}</li>)}</ul></article>)}</div>
        </section>
        <section aria-labelledby="cv-title" className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#12382e] text-white shadow-xl shadow-emerald-950/10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative grid lg:grid-cols-[1fr_18rem]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200"><span className="h-px w-7 bg-emerald-200/70" />Profil untuk rekruter</p>
              <h2 id="cv-title" className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Aplikasi web, mobile, dan komputasi terdistribusi.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Lulusan Teknik Informatika UKRI. Saya mengerjakan aplikasi inventaris berbasis Laravel dan PHP saat magang, memiliki proyek mobile Flutter, serta mendalami komputasi paralel dan terdistribusi.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/85">Laravel · PHP</span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/85">Flutter</span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/85">Komputasi paralel</span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/85">Sistem terdistribusi</span>
              </div>
              <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Pendidikan</p><p className="mt-1.5 text-sm font-medium">Teknik Informatika</p></div>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Proyek magang</p><p className="mt-1.5 text-sm font-medium">Aplikasi Inventaris Barang</p></div>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Mobile</p><p className="mt-1.5 text-sm font-medium">Pantau Kerja · Finora</p></div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center border-t border-white/15 bg-white/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-sm font-bold tracking-[0.12em] text-emerald-100">CV<span className="ml-1 text-emerald-300">.PDF</span></div>
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/55">Curriculum Vitae</p>
              <p className="mt-2 text-lg font-semibold">Ringkas, siap ditinjau.</p>
              <p className="mt-1 text-xs text-white/55">PDF · 1 halaman</p>
              <a href="/cv-ari-rizal-firmansyah.pdf" download="CV-Ari-Rizal-Firmansyah.pdf" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-emerald-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Unduh CV <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>
        <footer className="mt-16 flex flex-col gap-3 border-t border-[#dfe3dc] py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between"><span>Ari Rizal Firmansyah</span><Link href="/kontak" className="font-semibold text-emerald-800 hover:underline">Lanjut ke halaman kontak →</Link></footer>
      </article>
    </main>
  </>;
}
