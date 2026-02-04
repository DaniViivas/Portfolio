import Head from 'next/head';
import { profile } from '@/data/profile';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  const ogUrl = profile.seo.siteUrl || profile.links.website?.href;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={profile.seo.description}
      />
      <meta name="keywords" content={profile.seo.keywords} />
      <meta property="og:title" content={`${profile.fullName} | Portfolio`} />
      <meta
        property="og:description"
        content={profile.seo.description}
      />
      {profile.seo.ogImage ? (
        <meta property="og:image" content={profile.seo.ogImage} />
      ) : null}
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: profile.seo.defaultTitle,
};
