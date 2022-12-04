import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { PropsWithChildren } from 'react';

import Container from '@/components/Container';
import Meta from '@/components/Meta';
import ShareBox from '@/components/ShareBox';

import { Articles } from '@/libs/types';
import { POSTS_LOCATION, SITE_METADATA } from '@/libs/constants';

export default function ArticleLayout({ children, post }: PropsWithChildren<{ post: Articles }>) {
  return (
    <Container>
      <Meta
        title={`${post.meta.title} – Hafizh Maulana Y`}
        description={post.meta.description}
        // image={post.meta.image}
        date={new Date(post.meta.date).toISOString()}
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
              {format(parseISO(new Date(post.meta.date).toISOString()), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            Estimated {post.readingTime}
          </p>
        </div>
        <div className="prose mt-4 w-full max-w-none dark:prose-dark">{children}</div>
        <div className="mt-8 w-full">
          <ShareBox
            text={post.meta.title}
            url={`${SITE_METADATA.url}/articles/${post.meta.slug}`}
          />
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/articles">{'Back to articles'}</Link>
          {` • `}
          <a
            href={`${POSTS_LOCATION}/${post.meta.slug}.mdx`}
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
