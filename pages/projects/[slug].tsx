import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

import Container from '@/components/Container';
import Meta from '@/components/Meta';
import useProjectBookmarks from '@/hooks/useProjectBookmarks';
import { getProjectBySlug, projects, statusClassMap } from '@/libs/projects';

type Params = ParsedUrlQuery & {
  slug: string;
};

export default function ProjectDetailPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isBookmarked, toggleBookmark } = useProjectBookmarks();
  const hasBookmark = isBookmarked(project.slug);

  return (
    <Container>
      <Meta
        title={`${project.title} - Project Detail`}
        description={project.description}
        url={`https://hafizhmaulanay.live/projects/${project.slug}`}
      />

      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <Link
          href="/projects"
          className="mb-6 text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          ← Kembali ke Projects
        </Link>

        <div className="mb-6 flex w-full flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClassMap[project.status]}`}
            >
              {project.status}
            </span>
            <button
              type="button"
              onClick={() => toggleBookmark(project.slug)}
              aria-pressed={hasBookmark}
              className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:border-gray-400 hover:text-black dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              {hasBookmark ? 'Bookmarked' : 'Bookmark'}
            </button>
          </div>
        </div>

        <p className="mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>

        <section className="mb-8 w-full rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/30">
          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">{project.overview}</p>
        </section>

        <section className="mb-8 w-full rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/30">
          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">Highlights</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 w-full rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/30">
          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Tahun: {project.year}</span>
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
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}
