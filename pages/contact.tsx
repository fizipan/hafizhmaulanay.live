import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import Meta from '@/components/Meta';

export default function Contact() {
  return (
    <Container>
      <Meta
        title="Contact – Hafizh Maulana Yusliansyah"
        description="Hubungi Hafizh Maulana Yusliansyah untuk diskusi web engineering, kolaborasi project, atau sekadar say hello."
      />

      <div className="mx-auto mb-16 mt-8 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Contact
        </h1>

        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Kalau kamu ingin diskusi soal web engineering, kolaborasi project, atau sekadar say hello, langsung hubungi saya lewat salah satu channel di bawah ini.
        </p>

        <div className="flex w-full flex-col gap-4">
          <Link
            href="mailto:hafizhmy26@gmail.com"
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</div>
            <div className="text-base font-semibold text-black dark:text-white">hafizhmy26@gmail.com</div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/hafizhmaulanay/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</div>
            <div className="text-base font-semibold text-black dark:text-white">linkedin.com/in/hafizhmaulanay</div>
          </Link>

          <Link
            href="https://github.com/hafizhmaulanay"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</div>
            <div className="text-base font-semibold text-black dark:text-white">github.com/hafizhmaulanay</div>
          </Link>

          <Link
            href="https://www.instagram.com/hafizhmaulana_y/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Instagram</div>
            <div className="text-base font-semibold text-black dark:text-white">@hafizhmaulana_y</div>
          </Link>

          <Link
            href="https://twitter.com/hafizhmaulanay"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Twitter / X</div>
            <div className="text-base font-semibold text-black dark:text-white">@hafizhmaulanay</div>
          </Link>

          <Link
            href="https://www.youtube.com/@webprogramming1715"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">YouTube</div>
            <div className="text-base font-semibold text-black dark:text-white">youtube.com/@webprogramming1715</div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
