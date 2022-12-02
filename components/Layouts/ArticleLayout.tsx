import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { PropsWithChildren } from 'react';

import Container from '@/components/Container';
import Meta from '@/components/Meta';
import { Articles } from '@/libs/types';

export default function ArticleLayout({ children, post }: PropsWithChildren<{ post: any }>) {
  return (
    <Container>
      <Meta
        title={`${post.meta.title} – Hafizh Maulana Y`}
        description={post.meta.description}
        image={post.meta.image}
        date={post.meta.date}
        type="article"
      />
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.meta.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Hafizh Maulana Y"
              height={24}
              width={24}
              sizes="20vw"
              src="/avatar.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Hafizh Maulana Y / '}
              {post.meta.date}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            {222} min read
            {` • `}
            2222 views
          </p>
        </div>
        <div className="prose mt-4 w-full max-w-none dark:prose-dark">{children}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
              `https://hafizhmaulanay.live/blog/${post.meta.slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href="https://github.com/hafizhmaulanay/hafizhmaulanay.live/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Suggest Change'}
          </a>
        </div>
      </article>
    </Container>
  );
}
