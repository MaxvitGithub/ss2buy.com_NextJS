//app/[slug]/page.tsx

import ProductList from "./ProductList";
import TagSelector from "@/components/TagSelector";
import { seoMap } from "./urlseopage";
import Head from "./head";
import { notFound } from "next/navigation";
import { getAllPetfoods } from "@/data/all/dataAllJson";
import type { SlugPageProps } from "@/lib/types/app-router";
import { allPetfoodFiles, AllPetfoodSlug, getKeyTag, getSearchKeywords, getFoodTags,getRandomSlugsFromTags } from "@/lib/petfood";

// export const dynamic = "force-static";
// export const dynamicParams = false;
export async function generateStaticParams(): Promise<{ slug: AllPetfoodSlug }[]> {
  return allPetfoodFiles.map((slug) => ({ slug }));
}

type Product = {
  id: number;
  product_name: string;
  tags: string[];
  order: string;
  price: number;
  url_img: string;
  url_shopee: string;
};

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const MetadataSlug = decodeURIComponent(slug);
  const seo = seoMap[MetadataSlug];

  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
    };
  }

  // Fallback ถ้าไม่มีข้อมูลใน seoMap (อย่าลบทิ้ง!)
  return {
    title: MetadataSlug.replace(/-/g, " "),
    description: `หน้าแสดงข้อมูลสำหรับ ${MetadataSlug.replace(/-/g, " ")}`,
    keywords: [MetadataSlug.replace(/-/g, " ")],
  };
}

export default async function Page({ params }: SlugPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const fileContent = await getAllPetfoods();
  const products: Product[] = fileContent;

  //console.log(tagkey);
const searchKeywords = getSearchKeywords(decodedSlug);

  // กรองสินค้าตามแท็ก (ยังไม่ slice)
  const filteredProducts = products.filter((p) =>
    p.tags.some((tag) =>
      searchKeywords.some((keyword) => tag.includes(keyword))
    )
  );

  const total = filteredProducts.length.toLocaleString("th-TH");
  const Keytag = getKeyTag(filteredProducts);
  const foodTags = getFoodTags(Keytag);
  const relatedLinks = getRandomSlugsFromTags(decodedSlug, foodTags, 4); 
  
  if (filteredProducts.length === 0) {
    notFound(); // เรียกฟังก์ชันนี้ Next.js จะโชว์หน้า 404 ทันที
  }
  return (
    <>
      <Head
        decodedSlug={decodedSlug}
        Keytag={Keytag}
        seo={seoMap[decodedSlug]}
        products={filteredProducts}
      />
      <main className="p-1 space-y-4 ">
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
          <div className="container">
            <TagSelector decodedSlug={decodedSlug} tags={foodTags} />
          </div>
        </nav>

        <div className="container mt-5 bg-light">
          <h1 className="text-white text-3xl font-extrabold drop-shadow">
            {seoMap[decodedSlug]?.title}
          </h1>

          {filteredProducts.length === 0 ? (
            <div className="container">
              <p className="text-gray-500">
                ไม่พบสินค้าที่เกี่ยวข้องกับ {decodedSlug}
              </p>
            </div>
          ) : (
            <section className="py-5 bg-light">
              <div className="container">
                <h2 className="text-center mb-4 text-pink-600 font-extrabold text-xl sm:text-3xl">
                  💡 ทำไมต้องเลือก{" "}
                  {decodedSlug
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  จากเรา?
                </h2>
                <p className="text-center">
                  สินค้าแนะนำ {total} รายการ เพื่อคุณ
                </p>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {seoMap[decodedSlug]?.whyChoose.map((item, index) => (
                    <div key={index} className="col">
                      <div className="card border-0 shadow-sm h-100 bg-white">
                        <div className="card-body">
                          <h3 className="card-title text-pink fw-bold">
                            {item.title}
                          </h3>
                          <p className="card-text">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {filteredProducts.length !== 0 && (
          <ProductList
            products={filteredProducts}
            reviews={seoMap[decodedSlug]?.reviews ?? []}
            faq={seoMap[decodedSlug]?.faq ?? []}
            decodedSlug={decodedSlug}
            relatedLinks={relatedLinks}
          />
        )}
        <br></br>
        <br></br>
      </main>
    </>
  );
}
