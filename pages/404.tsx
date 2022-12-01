import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <div className="items-staryt mx-auto mb-16 flex max-w-2xl flex-col justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Why show a generic 404 when I can make it sound mysterious? It seems you've found
          something that used to exist, or you spelled something wrong. I'm guessing you spelled
          something wrong. Can you double check that URL?
        </p>
        <Link
          href="/"
          className="mx-auto w-64 rounded-md bg-gray-200 p-1 text-center font-bold text-black dark:bg-gray-800 dark:text-white sm:p-4"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
