import type { Metadata } from "next";
import "./globals.css";
import NavigationProgress from "./NavigationProgress";
import TouchScrollRefresh from "./TouchScrollRefresh";

export const metadata: Metadata = {
  title: {
    default: "Ari Rizal Firmansyah — Portofolio",
    template: "%s | Ari Rizal Firmansyah",
  },
  description:
    "Portofolio Ari Rizal Firmansyah, lulusan Teknik Informatika yang membangun proyek web, Android, dan backend.",
  applicationName: "Portofolio Ari Rizal Firmansyah",
  creator: "Ari Rizal Firmansyah",
  openGraph: {
    title: "Ari Rizal Firmansyah — Portofolio",
    description:
      "Profil, proyek, dan informasi kontak Ari Rizal Firmansyah.",
    siteName: "Portofolio Ari Rizal Firmansyah",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ari Rizal Firmansyah — Portofolio",
    description:
      "Profil, proyek, dan informasi kontak Ari Rizal Firmansyah.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><NavigationProgress /><TouchScrollRefresh />{children}</body>
    </html>
  );
}
