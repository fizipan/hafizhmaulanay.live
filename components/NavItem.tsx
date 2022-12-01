import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';

import { NavItemProps } from '@/libs/type';

export default function NavItem({ href, text }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={cx(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}
