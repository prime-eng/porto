# Portofolio Ari Rizal Firmansyah

Website portofolio pribadi yang dibangun dengan Next.js, React, TypeScript, dan Tailwind CSS. Proyek ini dapat dijalankan untuk pengembangan lokal atau dibangun sebagai image Docker produksi.

## Pengembangan lokal

Persyaratan: Node.js 22 dan npm.

```bash
npm ci
npm run dev
```

Buka <http://localhost:3000>. Perubahan pada berkas aplikasi akan dimuat ulang oleh server pengembangan.

Pemeriksaan yang tersedia:

```bash
npm run lint
npm run build
```

## Menjalankan dengan Docker Compose

Persyaratan: Docker Engine dan Docker Compose v2.

```bash
docker compose build
docker compose up -d
docker compose ps
```

Compose membangun image produksi multi-stage, menjalankan Next.js sebagai pengguna non-root, dan memeriksa kesehatan aplikasi. Port aplikasi hanya terikat ke `127.0.0.1:3000`, sehingga dapat diteruskan melalui reverse proxy HTTPS yang berjalan pada host.

```bash
docker compose logs -f web
```

Jangan membuka port aplikasi langsung ke internet. Arahkan domain melalui reverse proxy seperti Caddy atau Nginx, aktifkan HTTPS di sana, lalu pertahankan port aplikasi pada loopback host.

Untuk memperbarui setelah mengambil perubahan terbaru:

```bash
docker compose up -d --build
docker compose ps
```

## Isi website

- Beranda dan pilihan proyek
- Profil dan pendidikan
- Detail proyek beserta galeri screenshot
- Informasi kontak

Data proyek dapat diperbarui di `app/data/projects.ts`. Letakkan gambar proyek di `public/projects/`, lalu tambahkan jalur lokal dan teks alternatif yang menjelaskan gambar tersebut.
