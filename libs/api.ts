import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { POSTS_PATH } from './helpers';
import format from 'date-fns/format';

const getSlugs = () => {
  const paths = fs.readdirSync(POSTS_PATH);

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
};

const getPostFromSlug = (slug: string) => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      title: data.title ?? slug,
      date: format(new Date(data.date), 'MMMM dd, yyyy'),
      excerpt: data.excerpt ?? 'slug',
      slug,
    },
  };
};

const getArticles = () => {
  return getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
};

export { getArticles, getSlugs, getPostFromSlug };
