import { MDXRemote } from 'next-mdx-remote';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import ArticleLayout from '@/components/Layouts/ArticleLayout';
import components from '@/components/MDXComponents';

import { mdxToHtml } from '@/libs/mdx';
import { Articles } from '@/libs/types';
import { getPostFromSlug, getSlugs } from '@/libs/api';

export default function ArticlePage({ post }: { post: any }) {
  return (
    <ArticleLayout post={post}>
      <MDXRemote
        {...post.source.html}
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

  const mdxSource = await mdxToHtml(content);

  return {
    props: {
      post: {
        source: mdxSource,
        meta,
        ...mdxSource,
      },
    },
  };
}
