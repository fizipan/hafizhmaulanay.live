import Link from 'next/link';

import ExternalLink from '@/components/ExternalLink';
import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <NowPlaying />
      <div className="grid w-full max-w-2xl grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-500 transition hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 transition hover:text-gray-600">
            About
          </Link>
          <Link href="/projects" className="text-gray-500 transition hover:text-gray-600">
            Projects
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/hafizhmaulanay">Twitter</ExternalLink>
          <ExternalLink href="https://github.com/hafizhmaulanay">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/@webprogramming1715">YouTube</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/hafizhmaulanay/">LinkedIn</ExternalLink>
          <ExternalLink href="https://www.instagram.com/hafizhmaulana_y/">Instagram</ExternalLink>
          <ExternalLink href="mailto:hafizhmy26@gmail.com">Contact</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
