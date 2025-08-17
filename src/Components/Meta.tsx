// src/components/Meta.tsx
import { Helmet, HelmetProvider } from 'react-helmet-async';

type MetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

export default function Meta({ title, description, canonical, image }: MetaProps) {
  const siteName = "SojiLearn";
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || "Study abroad services (UK, USA, Canada, Malta): SOP writing, applications, visa, flights, accommodation, student loans.";

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