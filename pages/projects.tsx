import Link from 'next/link';

import Container from '@/components/Container';
import useProjectBookmarks from '@/hooks/useProjectBookmarks';
import Meta from '@/components/Meta';
import { projects, statusClassMap } from '@/libs/projects';

export default function Projects() {
  const { bookmarkedCount, isBookmarked, isHydrated, toggleBookmark } = useProjectBookmarks();

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
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Total bookmark: {isHydrated ? bookmarkedCount : 0}
        </p>

        <div className="grid w-full grid-cols-1 gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/30"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-black transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleBookmark(project.slug)}
                    className="shrink-0 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:border-gray-300 hover:text-black dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
                    aria-pressed={isBookmarked(project.slug)}
                    aria-label={`${isBookmarked(project.slug) ? 'Hapus' : 'Simpan'} bookmark ${
                      project.title
                    }`}
                  >
                    {isBookmarked(project.slug) ? 'Tersimpan' : 'Bookmark'}
                  </button>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClassMap[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
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
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Lihat Detail
                </Link>
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
