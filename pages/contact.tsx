import Link from 'next/link';

import Container from '@/components/Container';
import Meta from '@/components/Meta';

const primaryLinks = [
  {
    label: 'Email',
    value: 'hafizhmy26@gmail.com',
    href: 'mailto:hafizhmy26@gmail.com',
    description: 'Best for collaboration, work inquiries, and longer messages.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hafizhmaulanay',
    href: 'https://www.linkedin.com/in/hafizhmaulanay/',
    description: 'Connect professionally and follow career updates.',
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    value: 'github.com/hafizhmaulanay',
    href: 'https://github.com/hafizhmaulanay',
  },
  {
    label: 'Instagram',
    value: '@hafizhmaulana_y',
    href: 'https://www.instagram.com/hafizhmaulana_y/',
  },
  {
    label: 'Twitter / X',
    value: '@hafizhmaulanay',
    href: 'https://twitter.com/hafizhmaulanay',
  },
  {
    label: 'YouTube',
    value: '@webprogramming1715',
    href: 'https://www.youtube.com/@webprogramming1715',
  },
];

export default function Contact() {
  return (
    <Container>
      <Meta
        title="Contact – Hafizh Maulana Yusliansyah"
        description="Hubungi Hafizh Maulana Yusliansyah untuk diskusi web engineering, kolaborasi project, atau sekadar say hello."
      />

      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center pb-8">
        <div className="mb-10 w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <p className="mb-3 inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:border-gray-800 dark:text-gray-400">
            Contact
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Let&apos;s build something useful.
          </h1>
          <p className="max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            Punya ide, mau kolaborasi, atau sekadar ngobrol soal web engineering? Drop a message —
            I&apos;ll get back when I can.
          </p>
        </div>

        <section className="mb-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex min-h-[190px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 sm:p-6"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                  {item.label.slice(0, 1)}
                </div>
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">
                  {item.label}
                </h2>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <span className="mt-6 break-words text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition group-hover:decoration-gray-900 dark:text-gray-100 dark:decoration-gray-700 dark:group-hover:decoration-gray-100">
                {item.value}
              </span>
            </Link>
          ))}
        </section>

        <section className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/40 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                Elsewhere
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Other places to find my work and updates.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
              Socials
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-medium text-black dark:text-white">{item.label}</p>
                    <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                  <span className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
