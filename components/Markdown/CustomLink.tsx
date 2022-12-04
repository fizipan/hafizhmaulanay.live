import Link from 'next/link';
import { CustomLinkProps } from '@/libs/types';

export default function CustomLink({ href, children }: CustomLinkProps) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link href={href}>{children}</Link>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
