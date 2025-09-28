export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Interlace Studies Bali",
    "alternateName": "Interlace Studies",
    "description": "One stop service untuk studi dan kerja di Australia. Konsultan pendidikan terpercaya di Bali dengan tim berpengalaman. Bimbingan lengkap dari pemilihan kursus, visa, hingga penempatan kerja di Australia.",
    "url": "https://www.interlacestudies.id",
    "logo": "https://www.interlacestudies.id/images/logo-dark.png",
    "image": "https://www.interlacestudies.id/images/logo-dark.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bali",
      "addressCountry": "Indonesia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-xxx-xxx-xxxx",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/interlacestudies",
      "https://www.facebook.com/interlacestudies",
      "https://www.linkedin.com/company/interlacestudies"
    ],
    "serviceType": [
      "Konsultan Pendidikan Australia",
      "Konsultan Migrasi Australia", 
      "Visa Australia",
      "Studi di Australia",
      "Kerja di Australia",
      "Working Holiday Visa",
      "Student Visa Australia"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Interlace Studies",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konsultasi Pendidikan Australia",
            "description": "Bimbingan lengkap untuk studi di Australia"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Konsultasi Visa Australia",
            "description": "Bantuan pengurusan visa Australia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Penempatan Kerja Australia",
            "description": "Bantuan penempatan kerja di Australia"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
