import React, { FC } from 'react';

import { UtterancesProps } from '@/libs/types';
import useIntersect from '@/hooks/useIntersect';
import { createScriptElement, putChildElement } from '@/libs/utterance';

const CommentBox: FC<UtterancesProps> = ({ repo, label, theme, issueTerm, issueNumber }) => {
  const onIntersect = () => {
    try {
      const scriptEl = createScriptElement({
        repo,
        label,
        theme,
        issueTerm,
        issueNumber: issueNumber as never,
      });

      const idSkeleton = document.getElementById('comment-skeleton');
      if (idSkeleton?.classList.contains('hide')) {
        idSkeleton.classList.remove('hide');
      }

      scriptEl.onload = () => {
        const idSkeleton = document.getElementById('comment-skeleton');

        if (!idSkeleton?.classList.contains('hide')) {
          setTimeout(() => {
            idSkeleton?.classList.add('hide');
          }, 500);
        }
      };

      const idParent = document.getElementById('comments');
      if (idParent) {
        putChildElement(idParent, scriptEl);
      }
    } catch (e) {
      console.error('Failed insert utterances.es', e);
    }
  };

  const targetRef = useIntersect(onIntersect);

  return (
    <div id="comments" className="relative" ref={targetRef}>
      <div id="comment-skeleton" className="flex justify-center">
        <div className="max-w-760 mb-2 w-full animate-pulse overflow-hidden rounded-lg p-4 shadow-lg dark:bg-gray-800">
          <div className="flex">
            <div className="mr-2 h-8 w-20 rounded bg-gray-600"></div>
            <div className="h-8 w-20 rounded bg-gray-600"></div>
          </div>
          <div className="my-2 flex h-28 w-full items-center justify-center rounded bg-gray-600 text-xl md:text-2xl">
            Loading comments...
          </div>
          <div className="flex justify-between">
            <div className="mr-2 h-4 w-40 rounded bg-gray-600"></div>
            <div className="h-10 w-28 rounded bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
