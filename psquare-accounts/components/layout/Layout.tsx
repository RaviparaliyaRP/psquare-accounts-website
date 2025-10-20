import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// SEO Meta Tags Component
export function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  canonical,
}: {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}) {
  const defaultTitle = 'Psquare Accounts - Your Trusted Partner for Business Licensing & Registration';
  const defaultDescription = 'From Registration to Approval — We Handle It All. Expert business licensing, compliance, and registration services across India. 15+ years of experience, 1500+ happy clients.';
  const defaultKeywords = 'business registration, company registration, GST registration, FSSAI license, trade license, compliance, licensing services, India';

  return (
    <>
      <title>{title ? `${title} | Psquare Accounts` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Psquare Accounts" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title ? `${title} | Psquare Accounts` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || 'https://psquareaccounts.com'} />
      <meta property="og:image" content={ogImage || '/psqaure-logo.png'} />
      <meta property="og:site_name" content="Psquare Accounts" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Psquare Accounts` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || '/psqaure-logo.png'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/psqaure-logo.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Psquare Accounts",
            "description": "Business licensing and registration services across India",
            "url": "https://psquareaccounts.com",
            "logo": "https://psquareaccounts.com/psqaure-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-88661-14756",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi", "Gujarati"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "331, 3rd floor, Avadh pride, Opp metro pillar No 139, Near Nirant cross road",
              "addressLocality": "Vastral",
              "addressRegion": "Gujarat",
              "postalCode": "382418",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/psquare_accounts"
            ],
            "foundingDate": "2010",
            "slogan": "From Registration to Approval — We Handle It All"
          })
        }}
      />
    </>
  );
}
