import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      // next-mdx-remote@6 can resolve its own unified/vfile types which may
      // differ from top-level plugin typings; runtime behavior is unchanged.
      remarkPlugins: [remarkGfm as any],
      rehypePlugins: [
        rehypeSlug as any,
        rehypeCodeTitles as any,
        rehypePrism as any,
        [
          rehypeAutolinkHeadings as any,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ] as any,
      ],
      format: 'mdx',
    },
  });

  return {
    html: mdxSource,
    readingTime: readingTime(source).text,
  };
}
