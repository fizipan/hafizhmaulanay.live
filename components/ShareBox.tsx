import { useEffect, useState } from 'react';

export default function ShareArticle({ text, url }: { text: string; url: string }) {
  const [isSupportWebShare, setSupportWebShare] = useState(false);

  useEffect(() => {
    if (navigator.share !== undefined) {
      setSupportWebShare(true);
    }
  }, []);

  const shareMe = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    navigator
      .share({
        title: 'hafizhmaulanay.live',
        text: text,
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  };

  return (
    <div className="my-4 w-full justify-between rounded border border-blue-200 bg-blue-50 p-6 dark:border-gray-800 dark:bg-blue-opaque md:flex">
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
          Please share this article if you find it useful
        </p>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Sharing is caring. It helps me to grow and improve my content.
        </p>
      </div>
      <button
        className="mt-4 flex h-8 w-full items-center justify-center rounded bg-gray-100 px-4 py-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100 md:w-28"
        type="submit"
      >
        {isSupportWebShare ? (
          <a
            href={''}
            onClick={shareMe}
            title="Share this article"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Share
          </a>
        ) : (
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              text + ' - by @hafizhmaulanay'
            )}&url=${url}`}
            title="Share to Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Share
          </a>
        )}
      </button>
    </div>
  );
}
