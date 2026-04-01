export type ProjectStatus = 'Live' | 'In Progress' | 'Archived';

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  year: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'Website personal untuk menampilkan profil, artikel, dan eksperimen frontend dengan fokus performa dan pengalaman pengguna.',
    overview:
      'Project ini dibangun sebagai rumah utama untuk profil profesional, tulisan teknis, dan eksperimen frontend. Fokus pengembangan diarahkan ke performa, aksesibilitas, dan arsitektur kode yang mudah dirawat.',
    highlights: [
      'Menerapkan arsitektur halaman statis untuk waktu muat yang cepat.',
      'Menggunakan design system sederhana berbasis utility classes agar konsisten.',
      'Mengintegrasikan halaman artikel dan project dalam satu alur navigasi.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    year: '2026',
    demoUrl: 'https://hafizhmaulanay.live',
    repoUrl: 'https://github.com/hafizhmaulanay/hafizhmaulanay.live',
  },
  {
    slug: 'now-playing-api-integration',
    title: 'Now Playing API Integration',
    description:
      'Integrasi API Spotify untuk menampilkan status lagu yang sedang diputar secara realtime pada bagian footer website.',
    overview:
      'Integrasi ini dibuat untuk menampilkan konteks aktivitas musik saat ini secara realtime. Implementasi difokuskan pada fallback yang aman saat kredensial tidak tersedia.',
    highlights: [
      'Menggunakan API route di Next.js sebagai lapisan antara client dan Spotify API.',
      'Menambahkan fallback state agar komponen tetap stabil saat API tidak merespons.',
      'Membuat komponen footer tetap ringan meskipun data diperbarui secara berkala.',
    ],
    stack: ['Next.js API Routes', 'SWR', 'Spotify API'],
    status: 'Live',
    year: '2026',
  },
  {
    slug: 'mdx-technical-writing-workflow',
    title: 'MDX Technical Writing Workflow',
    description:
      'Sistem publikasi artikel berbasis MDX dengan alur penulisan sederhana, SEO metadata, dan rendering komponen markdown custom.',
    overview:
      'Workflow ini dirancang agar proses menulis artikel teknis tetap cepat, namun tetap fleksibel untuk menambahkan komponen interaktif ketika dibutuhkan.',
    highlights: [
      'Memisahkan metadata artikel dan konten agar mudah diindeks untuk listing.',
      'Mendukung komponen markdown custom untuk callout, image, dan link.',
      'Menyediakan struktur konten yang ramah SEO dengan metadata terstandar.',
    ],
    stack: ['MDX', 'next-mdx-remote', 'Remark/Rehype'],
    status: 'Live',
    year: '2026',
  },
  {
    slug: 'developer-experience-playground',
    title: 'Developer Experience Playground',
    description:
      'Koleksi eksperimen kecil untuk mengevaluasi pattern frontend, kualitas kode, dan standardisasi komponen untuk project production.',
    overview:
      'Playground ini menjadi ruang eksperimen sebelum pattern dibawa ke project utama. Tujuannya adalah mempercepat validasi pendekatan engineering dengan risiko rendah.',
    highlights: [
      'Menguji beberapa pola component composition sebelum dipakai di production.',
      'Mengevaluasi aturan linting dan format kode untuk menjaga konsistensi tim.',
      'Membandingkan alternatif struktur folder agar scaling project lebih terarah.',
    ],
    stack: ['React', 'TypeScript', 'ESLint'],
    status: 'In Progress',
    year: '2026',
  },
];

export const statusClassMap: Record<ProjectStatus, string> = {
  Live: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In Progress': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  Archived: 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
