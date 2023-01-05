import { Utterances } from '@/libs/types';

const SOURCE = 'https://utteranc.es/client.js';

const createScriptElement = ({
  repo,
  label,
  theme,
  issueTerm,
  issueNumber,
}: Utterances): HTMLScriptElement => {
  const scriptEl = document.createElement('script');

  scriptEl.src = SOURCE;
  scriptEl.async = true;
  scriptEl.setAttribute('repo', repo);
  if (issueTerm) {
    const _issueTerm = Array.isArray(issueTerm) ? issueTerm.join(' ') : issueTerm;

    scriptEl.setAttribute('issue-term', _issueTerm);
  } else if (typeof issueNumber === 'number') {
    scriptEl.setAttribute('issue-number', String(issueNumber));
  }
  scriptEl.setAttribute('crossorigin', 'anonymous');
  scriptEl.setAttribute('theme', theme);

  if (label) {
    scriptEl.setAttribute('label', label);
  }

  return scriptEl;
};

const putChildElement = (parent: HTMLElement, child: HTMLElement): HTMLElement => {
  parent.childNodes.forEach((node) => {
    if (node.contains(document.getElementById('comment-skeleton'))) {
      return;
    }

    parent.removeChild(node);
  });

  setTimeout(() => {
    parent.appendChild(child);
  }, 800);

  return parent;
};

export { createScriptElement, putChildElement };
