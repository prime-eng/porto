import Breadcrumbs from "../Breadcrumbs";
import DecorativeBackground from "../DecorativeBackground";
import Sidebar from "../Sidebar";
import { whatsappNumber, whatsappUrl } from "../data/contact";

export default function KontakPage() {
  return <>
    <Sidebar />
    <main className="relative isolate min-h-screen bg-[#f7f7f3] px-6 py-8 text-[#19211e] md:pl-64 md:px-10 lg:px-14">
      <DecorativeBackground />
      <section className="relative mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: "Kontak" }]} />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-16">
          <header className="py-8 lg:py-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800"><span className="h-px w-8 bg-emerald-700" />Kontak</p>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">Mari mulai percakapan.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#626a64] sm:text-lg">Untuk bertukar pikiran tentang proyek, teknologi, atau sekadar terhubung, silakan pilih kanal yang paling nyaman.</p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#dfe3dc] bg-white/70 px-4 py-2.5 text-sm text-[#566158]"><span className="h-2 w-2 rounded-full bg-emerald-600" /><span>Email dan GitHub tersedia</span></div>
          </header>
          <div className="rounded-[2rem] bg-[#173d32] p-5 text-white shadow-xl shadow-emerald-950/10 sm:p-7">
            <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Pilih kanal kontak</p>
            <a href="mailto:primasampurna9@gmail.com" className="group mt-4 block rounded-2xl bg-white p-6 text-[#19211e] transition hover:-translate-y-0.5 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">Email</p><h2 className="mt-3 break-all text-xl font-semibold sm:text-2xl">primasampurna9@gmail.com</h2></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eff4ef] text-emerald-900 transition group-hover:bg-emerald-900 group-hover:text-white" aria-hidden="true">↗</span></div>
              <p className="mt-5 text-sm text-gray-500">Kirim pesan langsung melalui aplikasi email Anda.</p>
            </a>
            <a href="https://github.com/prime-eng" target="_blank" rel="noreferrer" className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-white/20 px-6 py-5 transition hover:border-white/50 hover:bg-white/5 sm:px-7">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">GitHub</p><h2 className="mt-1 text-lg font-semibold">github.com/prime-eng</h2></div><span className="text-xl text-white/60 transition group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">↗</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-white/20 px-6 py-5 transition hover:border-white/50 hover:bg-white/5 sm:px-7">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">WhatsApp</p><h2 className="mt-1 text-lg font-semibold">{whatsappNumber}</h2></div><span className="text-xl text-white/60 transition group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">↗</span>
            </a>
            <p className="px-2 pb-1 pt-6 text-xs leading-5 text-white/55">Saya senang bertukar pikiran seputar pengembangan web, aplikasi, dan ide proyek.</p>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#dfe3dc] bg-[#dfe3dc] sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-5"><p className="text-xs uppercase tracking-[0.15em] text-gray-500">Lokasi</p><p className="mt-2 text-sm font-semibold">Bandung, Indonesia</p></div>
          <div className="bg-white p-5"><p className="text-xs uppercase tracking-[0.15em] text-gray-500">Email</p><p className="mt-2 break-all text-sm font-semibold">primasampurna9@gmail.com</p></div>
          <div className="bg-white p-5"><p className="text-xs uppercase tracking-[0.15em] text-gray-500">WhatsApp</p><p className="mt-2 text-sm font-semibold">{whatsappNumber}</p></div>
          <div className="bg-white p-5"><p className="text-xs uppercase tracking-[0.15em] text-gray-500">Profil kode</p><p className="mt-2 text-sm font-semibold">prime-eng</p></div>
        </div>
        <footer className="mt-14 flex flex-col gap-3 border-t border-[#dfe3dc] py-6 text-sm text-gray-500 sm:flex-row sm:justify-between"><span>Terima kasih sudah berkunjung.</span><span>Ari Rizal Firmansyah · 2026</span></footer>
      </section>
    </main>
  </>;
}
