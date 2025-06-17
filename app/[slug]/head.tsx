// app/[slug]/head.tsx
"use client";

type Product = {
  id: number;
  product_name: string;
  tags: string[];
  order: string;
  price: number;
  url_img: string;
  url_shopee: string;
};

function extractBrand(name: string): string {
  const knownBrands = [
    "Me-O",
    "Whiskas",
    "Royal Canin",
    "Hill’s",
    "Purina One",
  ];
  return (
    knownBrands.find((brand) =>
      name.toLowerCase().includes(brand.toLowerCase())
    ) || "ไม่ทราบ"
  );
}

function extractBrandFromKeytag(Keytag: string | null): string {
  const knownBrands = [
    "Me-O",
    "Whiskas",
    "Royal Canin",
    "Hill’s",
    "Purina One",
  ];
  if (!Keytag) return "รวมหลายแบรนด์";

  const match = knownBrands.find((brand) =>
    Keytag.toLowerCase().includes(brand.toLowerCase())
  );

  return match || "รวมหลายแบรนด์";
}

function extractBrandKeytagListItem(Keytag: string | null): string {
  const knownBrands = [
    "Me-O",
    "Whiskas",
    "Royal Canin",
    "Hill’s",
    "Purina One",
  ];

  if (!Keytag) return "ไม่ระบุแบรนด์"; // fallback เมื่อไม่มีข้อมูลเลย

  const match = knownBrands.find((brand) =>
    Keytag.toLowerCase().includes(brand.toLowerCase())
  );

  return match || Keytag; // fallback เป็น keytag แบบเว้นวรรค
}

export default function Head({
  decodedSlug,
  Keytag,
  seo,
  products = [],
}: {
  decodedSlug: string;
  Keytag: string | null;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
    faq?: { question: string; answer: string }[];
    reviews?: {
      name: string;
      breed: string;
      brand: string;
      comment: string;
      rating: number;
    }[];
    whyChoose?: { title: string; detail: string }[];
  };
  products?: Product[];
}) {
  const brandName = extractBrandKeytagListItem(decodedSlug);

  const keytagName = decodedSlug?.replace(/-/g, " ") || "หมวดหมู่";

  const siteUrl = "https://www.ss2buy.com/";

  // เปรียบเทียบว่า keytagName กับ brandName ซ้ำหรือไม่
  // console.log(keytagName);
  const isSame = keytagName === brandName;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "หน้าแรก",
      item: "https://www.ss2buy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: Keytag,
      item: `https://www.ss2buy.com/${Keytag}`,
    },
    // ✅ เพิ่มเฉพาะเมื่อ brandName ไม่ตรงกับ keytagName
    ...(!isSame
      ? [
          {
            "@type": "ListItem",
            position: 3,
            name: keytagName,
            item: `https://www.ss2buy.com/${decodedSlug}`,
          },
        ]
      : []),
  ];

  //console.log(decodedSlug);
  const productGraph =
    products?.slice(0, 8).map((product) => ({
      "@type": "Product",
      name: product.product_name,
      image: product.url_img,
      description: "รีวิวแนะนำโดยเว็บไซต์ของเรา",
      brand: { "@type": "Brand", name: extractBrand(product.product_name) },
      offers: {
        "@type": "Offer",
        //url: product.url_shopee,
        price: product.price.toFixed(2),
        priceCurrency: "THB",
        availability: "https://schema.org/InStock",
      },
    })) ?? [];

  return (
    <>
         

      {/* SEO Robots */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />

      {/* Social/Open Graph */}
      <meta property="og:site_name" content="SS2BUY" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo?.title} />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={products?.[0]?.url_img} />
      <meta property="og:url" content={siteUrl + decodedSlug} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@twitter" />
      <meta name="twitter:title" content={seo?.title} />
      <meta name="twitter:description" content={seo?.description} />
      <meta name="twitter:image" content={products?.[0]?.url_img} />

         {/* ✅ Preconnect เพื่อเร่งการเชื่อมต่อ DNS */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        /> 

      {/* Canonical/Hreflang */}
      <link rel="canonical" href={siteUrl + decodedSlug} />
      <link rel="alternate" href={siteUrl + decodedSlug} hrefLang="x-default" />
      <link rel="alternate" href={siteUrl + decodedSlug} hrefLang="th" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${siteUrl}${decodedSlug}`,
                url: `${siteUrl}${decodedSlug}`,
                name: seo?.title,
                description: seo?.description,
                inLanguage: "th",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: breadcrumbItems,
              },
              {
                "@type": "Product",
                "@id": `${siteUrl}${decodedSlug}#product`,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `${siteUrl}${decodedSlug}`,
                },
                image: products?.[0]?.url_img,
                name: seo?.title,
                description: seo?.description,
                brand: {
                  "@type": "Brand",
                  name: extractBrandFromKeytag(decodedSlug),
                },
                offers: {
                  "@type": "Offer",
                  price: products?.[0]?.price?.toFixed(2) ?? "0.00",
                  priceCurrency: "THB",
                  availability: "https://schema.org/InStock",

                  priceValidUntil: "2025-12-31",
                  seller: {
                    "@type": "Organization",
                    name: "ss2buy",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue:
                    seo?.reviews && seo.reviews.length > 0
                      ? (
                          seo.reviews.reduce(
                            (sum, r) => sum + (r.rating || 0),
                            0
                          ) / seo.reviews.length
                        ).toFixed(1)
                      : 5,
                  reviewCount: seo?.reviews?.length || 1,
                },
                review:
                  seo?.reviews?.map((item) => ({
                    "@type": "Review",
                    author: { "@type": "Person", name: item.name },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: item.rating,
                      bestRating: "5",
                    },
                    reviewBody: item.comment,
                  })) ?? [],
              },

              ...productGraph,
            ],
          }),
        }}
      />

      {seo?.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: seo.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
