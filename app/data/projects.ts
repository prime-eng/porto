export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  status?: string;
  description: string;
  objective?: string;
  features?: string[];
  contribution?: string;
  technologies: string[];
  screenshots: ProjectScreenshot[];
  demoUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "aplikasi-inventaris-barang",
    number: "01",
    category: "WEB APP",
    title: "Aplikasi Inventaris Barang",
    description:
      "Aplikasi inventaris barang berbasis website yang dikembangkan menggunakan Laravel dan PHP sebagai bagian dari kegiatan magang.",
    contribution: "Dikembangkan sebagai proyek di tempat magang.",
    technologies: ["Laravel", "PHP"],
    screenshots: [
      {
        src: "/projects/invdashboard.png",
        alt: "Dashboard Aplikasi Inventaris Barang",
      },
    ],
  },
  {
    slug: "aplikasi-pantau-kerja",
    number: "02",
    category: "MOBILE APP",
    title: "Aplikasi Pantau Kerja",
    description:
      "Aplikasi mobile berbasis Flutter untuk membantu memantau pekerjaan.",
    technologies: ["Flutter"],
    screenshots: [],
  },
  {
    slug: "finora",
    number: "03",
    category: "MOBILE APP",
    title: "Finora",
    description: "Aplikasi mobile Finora yang dibangun menggunakan Flutter.",
    technologies: ["Flutter"],
    screenshots: [],
  },
];
