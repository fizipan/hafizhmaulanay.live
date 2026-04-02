import { useCallback, useEffect, useMemo, useState } from 'react';

const PROJECT_BOOKMARKS_STORAGE_KEY = 'project-bookmarks';

const parseStoredBookmarks = (value: string | null): string[] => {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is string => typeof item === 'string');
  } catch {
    return [];
  }
};

export default function useProjectBookmarks() {
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedBookmarks = parseStoredBookmarks(
      window.localStorage.getItem(PROJECT_BOOKMARKS_STORAGE_KEY),
    );

    setBookmarkedSlugs(storedBookmarks);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(PROJECT_BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedSlugs));
  }, [bookmarkedSlugs, isHydrated]);

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarkedSlugs((currentBookmarks) => {
      if (currentBookmarks.includes(slug)) {
        return currentBookmarks.filter((bookmarkedSlug) => bookmarkedSlug !== slug);
      }

      return [...currentBookmarks, slug];
    });
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarkedSlugs.includes(slug),
    [bookmarkedSlugs],
  );

  const bookmarkedCount = useMemo(() => bookmarkedSlugs.length, [bookmarkedSlugs]);

  return {
    bookmarkedCount,
    bookmarkedSlugs,
    isBookmarked,
    isHydrated,
    toggleBookmark,
  };
}
