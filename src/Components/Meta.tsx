// src/components/Meta.tsx
import { Helmet, HelmetProvider } from 'react-helmet-async';

type MetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

export default function Meta({ title, description, canonical, image }: MetaProps) {
  const siteName = "Sojilearn";
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || "Learn and explore study opportunities in Malta, UK, USA, Canada, Germany, and Ireland.";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        {desc && <meta name="description" content={desc} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <html lang="en" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    </HelmetProvider>
  );
}