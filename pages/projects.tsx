import Container from '@/components/Container';
import Meta from '@/components/Meta';

type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  status: 'Live' | 'In Progress' | 'Archived';
  year: string;
  demoUrl?: string;
  repoUrl?: string;
};

const projects: ProjectItem[] = [
  {
    title: 'Personal Portfolio Website',
    description:
      'Website personal untuk menampilkan profil, artikel, dan eksperimen frontend dengan fokus performa dan pengalaman pengguna.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    year: '2026',
    demoUrl: 'https://hafizhmaulanay.live',
    repoUrl: 'https://github.com/hafizhmaulanay/hafizhmaulanay.live',
  },
  {
    title: 'Now Playing API Integration',
    description:
      'Integrasi API Spotify untuk menampilkan status lagu yang sedang diputar secara realtime pada bagian footer website.',
    stack: ['Next.js API Routes', 'SWR', 'Spotify API'],
    status: 'Live',
    year: '2026',
  },
  {
    title: 'MDX Technical Writing Workflow',
    description:
      'Sistem publikasi artikel berbasis MDX dengan alur penulisan sederhana, SEO metadata, dan rendering komponen markdown custom.',
    stack: ['MDX', 'next-mdx-remote', 'Remark/Rehype'],
    status: 'Live',
    year: '2026',
  },
  {
    title: 'Developer Experience Playground',
    description:
      'Koleksi eksperimen kecil untuk mengevaluasi pattern frontend, kualitas kode, dan standardisasi komponen untuk project production.',
    stack: ['React', 'TypeScript', 'ESLint'],
    status: 'In Progress',
    year: '2026',
  },
];

const statusClassMap: Record<ProjectItem['status'], string> = {
  Live: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In Progress': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  Archived: 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

export default function Projects() {
  return (
    <Container>
      <Meta
        title="Projects - Hafizh Maulana Yusliansyah"
        description="Daftar project personal Hafizh Maulana Yusliansyah, mulai dari web portfolio, integrasi API, hingga eksperimen developer experience."
      />

      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Projects
        </h1>
        <p className="mb-10 text-gray-700 dark:text-gray-300">
          Beberapa project yang pernah dan sedang saya kerjakan. Fokus utama saya adalah performa
          web, maintainability, dan developer experience.
        </p>

        <div className="grid w-full grid-cols-1 gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/30"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-black dark:text-white">{project.title}</h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClassMap[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
