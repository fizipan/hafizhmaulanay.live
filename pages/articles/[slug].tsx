import { MDXRemote } from 'next-mdx-remote';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import ArticleLayout from '@/components/Layouts/ArticleLayout';
import components from '@/components/MDXComponents';

import { mdxToHtml } from '@/libs/mdx';
import { Articles } from '@/libs/types';
import { getPostFromSlug, getSlugs } from '@/libs/api';

export default function PostPage({ post }: { post: Articles }) {
  return (
    <ArticleLayout post={post}>
      <MDXRemote
        {...post.source}
        components={
          {
            ...components,
          } as any
        }
      />
    </ArticleLayout>
  );
}

export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);

  const { html, readingTime } = await mdxToHtml(content);

  return {
    props: {
      post: {
        source: html,
        meta,
        readingTime,
      },
    },
  };
}
