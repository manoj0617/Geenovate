import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Geenovate Foundation | College Incubation Center',
  description = 'Geenovate Foundation helps college students turn innovative ideas into impactful startups through mentorship, resources, and community support.',
  keywords = 'incubation center, college startup incubator, innovation lab, student entrepreneurs',
  ogImage = '/images/og-image.jpg',
  ogUrl = 'https://geenovate.org',
  ogType = 'website',
  canonicalUrl = 'https://geenovate.org',
}: SEOProps) => {
  // JSON-LD structured data for organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Geenovate Foundation',
    url: 'https://geenovate.org',
    logo: 'https://geenovate.org/logo1.png',
    description: 'College startup incubator and innovation hub for student entrepreneurs',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 University Road',
      addressLocality: 'College City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'United States'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.facebook.com/geenovate',
      'https://www.twitter.com/geenovate',
      'https://www.linkedin.com/company/geenovate',
      'https://www.instagram.com/geenovate'
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Font preloading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" 
        rel="stylesheet"
      />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;