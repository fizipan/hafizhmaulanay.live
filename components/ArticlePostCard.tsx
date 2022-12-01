import Link from 'next/link';
import cx from 'classnames';

import { ArticlePostCardProps } from '@/libs/types';

export default function ArticlePostCard({ title, slug, gradient }: ArticlePostCardProps) {
  return (
    <Link
      href={`/articles/${slug}`}
      className={cx(
        'transform transition-all hover:scale-[1.01]',
        'w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3',
        gradient
      )}
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
            {title}
          </h4>
        </div>
        <div className="capsize flex items-center text-gray-600 dark:text-gray-400">
          <span className="capsize mr-2 align-baseline">See article</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
