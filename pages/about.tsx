import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import Meta from '@/components/Meta';

export default function About() {
  return (
    <Container>
      <Meta
        title="About – Hafizh Maulana Yusliansyah"
        description="Tentang Hafizh Maulana Yusliansyah, software engineer yang fokus pada developer experience, web performance, dan modern frontend."
      />

      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About
        </h1>

        <div className="mb-10 flex w-full flex-col items-start gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800/30 sm:flex-row">
          <div className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
            <Image
              src="/avatar.png"
              alt="Hafizh Maulana Yusliansyah"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Hafizh Maulana Yusliansyah
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Software Engineer yang fokus membangun pengalaman developer lebih baik dan produk web
              yang cepat, maintainable, dan nyaman dipakai.
            </p>
          </div>
        </div>

        <section className="mb-10">
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
            Ringkasan
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Saya menikmati proses mengubah ide menjadi produk digital yang rapi, reliable, dan
            mudah dikembangkan tim. Minat utama saya ada di frontend engineering, ekosistem
            JavaScript/TypeScript, serta praktik engineering yang membuat delivery lebih konsisten.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Di luar coding, saya senang berbagi insight lewat tulisan teknis dan dokumentasi agar
            ilmu yang didapat bisa bermanfaat untuk developer lain.
          </p>
        </section>

        <section className="mb-10 w-full">
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
            Fokus Utama
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Modern frontend development (React, Next.js, TypeScript)</li>
            <li>Web performance dan UX yang cepat</li>
            <li>Developer experience, code quality, dan maintainability</li>
          </ul>
        </section>

        <section className="w-full">
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
            Mari terhubung
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Kalau kamu ingin diskusi soal web engineering, kolaborasi project, atau sekadar say
            hello, langsung hubungi saya.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:hafizhmy26@gmail.com"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
            >
              Email
            </Link>
            <Link
              href="https://github.com/hafizhmaulanay"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/hafizhmaulanay/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
