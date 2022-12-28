import Head from 'next/head';
import { useRouter } from 'next/router';

import { MetaProps } from '@/libs/types';
import { SITE_METADATA } from '@/libs/constants';

export default function Meta({
  title = SITE_METADATA.title,
  description = SITE_METADATA.description,
  url = SITE_METADATA.url,
  image = SITE_METADATA.image,
  type = SITE_METADATA.type,
  date = SITE_METADATA.date,
}: MetaProps) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={description} name="description" />
      <meta property="og:url" content={`${url}${router.asPath}`} />
      <link rel="canonical" href={`${url}${router.asPath}`} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Hafizh Maulana Yusliansyah" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hafizhmaulanay" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  );
}
