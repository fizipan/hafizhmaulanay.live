import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import NavItem from '@/components/NavItem';
import MobileMenu from '@/components/MobileMenu';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-gray-50 bg-opacity-60 pt-8 pb-8  text-gray-900 dark:border-gray-700  dark:bg-gray-900 dark:text-gray-100 sm:pb-16">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <div className="ml-[-0.60rem]">
        <MobileMenu />
        <NavItem href="/" text="Home" />
        <NavItem href="/articles" text="Articles" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/about" text="About" />
      </div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5 text-gray-800 dark:text-gray-200"
          >
            {resolvedTheme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
    </nav>
  );
}
