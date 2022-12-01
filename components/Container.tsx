import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContainerProps, MetaProps } from '@/libs/type';

export default function Container({ children, ...customMeta }: ContainerProps) {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Hafizh Maulana Y – Developer, Digital Craftsman, Open Source Enthusiast.',
    description: `Front-end developer, JavaScript enthusiast, Laravel lover, and open source contributor.`,
    image: 'https://leerob.io/static/images/lee-banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <Navbar />
      </div>
      <main id="skip" className="flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900">
        {children}
        <Footer />
      </main>
    </div>
  );
}
