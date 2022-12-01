import Image from 'next/image';

import Container from '@/components/Container';
import BlogPostCard from '@/components/BlogPostCard';
import BlogPost from '@/components/BlogPost';

export default function Home() {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              Hafizh Maulana Y
            </h1>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              SE of Developer Experience at <span className="font-semibold">Art By Code</span>
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              {' '}
              Helping developers build a faster web. Teaching about web development, Laravel, and
              React / Next.js.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
            <Image
              alt="Haizh Maulana Y"
              height={176}
              width={176}
              src="/avatar.png"
              sizes="30vw"
              priority
              className="rounded-full grayscale filter"
            />
          </div>
        </div>

        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Featured Posts
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <BlogPostCard
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Rust Is The Future of JavaScript Infrastructure"
            slug="rust"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>

        <h3 className="mb-4 mt-16 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Latest Articles
        </h3>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Everything that is on my mind, I will write here. mostly about web development, tips &
          trick and tech careers.
        </p>
        <BlogPost
          title="Developer Experience at Vercel"
          slug="developer-experience-at-vercel"
          excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
        />
        <BlogPost
          title="Developer Experience at Vercel"
          slug="developer-experience-at-vercel"
          excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
        />
        <BlogPost
          title="Developer Experience at Vercel"
          slug="developer-experience-at-vercel"
          excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
        />
        <BlogPost
          title="Developer Experience at Vercel"
          slug="developer-experience-at-vercel"
          excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
          className="mt-2 flex h-6 items-center rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Read all articles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="ml-1 h-6 w-6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
      </div>
    </Container>
  );
}
