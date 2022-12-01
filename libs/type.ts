import React from 'react';

export interface NavItemProps {
  href: string;
  text: string;
  children?: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface MetaProps {
  title: string;
  description: string;
  image: string;
  type: string;
  date?: string;
}

export interface BlogPostCardProps {
  title: string;
  slug: string;
  gradient: string;
}

export interface BlogPostProps {
  title: string;
  slug: string;
  excerpt: string;
}
