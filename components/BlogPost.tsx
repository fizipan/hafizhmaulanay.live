import { BlogPostProps } from '@/libs/type';
import Link from 'next/link';

export default function BlogPost({ slug, title, excerpt }: BlogPostProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="border-grey-200 mb-8 w-full rounded border bg-white p-4 transition-all hover:scale-[1.01] dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
      </div>
    </Link>
  );
}
