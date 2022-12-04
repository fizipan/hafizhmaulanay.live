import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Articles {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
  readingTime: string;
}

export interface ArticleMeta {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featured: boolean;
}

// PROPS ---------------------------------------------- //
export interface NavItemProps {
  href: string;
  text: string;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface MetaProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  date?: string;
}

export interface ArticlePostCardProps {
  title: string;
  slug: string;
  gradient: string;
}

export interface ArticlePostProps {
  title: string;
  slug: string;
  excerpt: string;
}

export interface ImageWithThemeProps {
  light: string;
  dark: string;
  alt: string;
}

export interface RoundedImageProps {
  src: string;
  alt: string;
}

export interface CalloutProps {
  emoji: string;
  children: React.ReactNode;
}

export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
