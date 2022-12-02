import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';

import Container from '@/components/Container';
import ArticlePost from '@/components/ArticlePost';
import Meta from '@/components/Meta';

import { ArticlePostProps } from '@/libs/types';
import { getArticles } from '@/libs/api';

export default function Articles({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredArticlePosts = articles.filter((article: ArticlePostProps) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <Meta
        title="Articles – Hafizh Maulana Y"
        description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
      />
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Articles
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${articles.length} articles on my blog.
            Use the search below to filter by title.`}
        </p>
        <div className="relative mb-4 w-full">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
              Most Popular
            </h3>
            <ArticlePost
              title="Rust Is The Future of JavaScript Infrastructure"
              excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
              slug="rust"
            />
            <ArticlePost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />
            <ArticlePost
              title="Building a Design System Monorepo with Turborepo"
              excerpt="Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more."
              slug="turborepo-design-system-monorepo"
            />
          </>
        )}
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          All Articles
        </h3>
        {!filteredArticlePosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">No articles found.</p>
        )}
        {filteredArticlePosts.map((article) => (
          <ArticlePost
            key={article.title}
            slug={article.slug}
            title={article.title}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const articles: ArticlePostProps[] = getArticles()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: {
      articles,
    },
  };
}
