import cx from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';

import MenuIcon from '@/components/Icons/MenuIcon';
import CrossIcon from '@/components/Icons/CrossIcon';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  });

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cx(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cx(
            styles.menu,
            'absolute flex flex-col bg-gray-100 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/" className="flex w-auto pb-4">
              Home
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/articles" className="flex w-auto pb-4">
              Articles
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/projects" className="flex w-auto pb-4">
              Projects
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/about" className="flex w-auto pb-4">
              About
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
