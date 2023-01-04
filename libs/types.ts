import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

// COMPONENTS ---------------------------------------------- //
export type Articles = {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
  readingTime: string;
};

export type ArticleMeta = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featured: boolean;
};

// PROPS ---------------------------------------------- //
export type NavItemProps = {
  href: string;
  text: string;
};

export type ContainerProps = {
  children: React.ReactNode;
};

export type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export type MetaProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  date?: string;
};

export type ArticlePostCardProps = {
  title: string;
  slug: string;
  gradient: string;
};

export type ArticlePostProps = {
  title: string;
  slug: string;
  excerpt: string;
};

export type ImageWithThemeProps = {
  light: string;
  dark: string;
  alt: string;
};

export type RoundedImageProps = {
  src: string;
  alt: string;
};

export type CalloutProps = {
  emoji: string;
  children: React.ReactNode;
};

export type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
};

// Spotify ---------------------------------------------- //
export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

// Utterances ---------------------------------------------- //
export type UtterancesProps = Utterances;

export type Utterances = {
  repo: Repo;
  label?: string;
  theme: Theme;
} & Issue;

export type Repo = `${string}/${string}`;

export type Issue =
  | {
      issueTerm: Term | string[];
      issueNumber?: never;
    }
  | {
      issueTerm?: never;
      issueNumber: number;
    };

export type Term = 'pathname' | 'url' | 'title' | 'og:title';
export type Theme =
  | 'github-light'
  | 'github-dark'
  | 'preferred-color-scheme'
  | 'github-dark-orange'
  | 'icy-dark'
  | 'dark-blue'
  | 'photon-dark'
  | 'boxy-light';
