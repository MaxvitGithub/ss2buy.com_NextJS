//ProductList.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { seoMap } from "./urlseopage";

type Product = {
  id: number;
  product_name: string;
  tags: string[];
  order: string;
  price: number;
  url_img: string;
  url_shopee: string;
};

type ReviewItem = {
  name: string;
  breed: string;
  brand: string;
  comment: string;
  rating: number;
};

type faqItem = {
  question: string;
  answer: string;
};

function formatToThousand(num: number | string): string {
  const n = Number(num); // <<--- เพิ่มบรรทัดนี้
  if (n < 1000) return n.toString();
  return (n / 1000).toFixed(1) + "พัน";
}

export default function ProductList({
  products,
  reviews,
  faq,
  decodedSlug,
  relatedLinks,
}: {
  products: Product[];
  reviews: ReviewItem[];
  faq: faqItem[];
  decodedSlug: string;
  relatedLinks: string[];
}) {
  const [visibleCount, setVisibleCount] = useState(18);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100;
        if (nearBottom) {
          setVisibleCount((prev) => Math.min(prev + 18, products.length));
        }
      }, 100); // 100ms delay
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products.length]);

  const Review = decodedSlug.replace(/-/g, " ");

  const firstProducts = products.slice(0, 6);
  const faqList = products.slice(6, 15);
  const remainingProducts = products.slice(15, visibleCount);

  const relatedSlugs = relatedLinks;  

  return (
    <div className="container">
      <section aria-labelledby="product-grid">
        <h2 id="product-grid" className="sr-only">
          รายการสินค้า
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {firstProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-2 shadow transition"
            >
              {product.url_img.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width="100%"
                  className="vedio_img"
                >
                  <source src={product.url_img} type="video/mp4" />
                  เบราว์เซอร์ของคุณไม่รองรับ video tag
                </video>
              ) : product.url_img.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                <Image
                  src={product.url_img}
                  alt={product.product_name}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="product-image vedio_img"
                  style={{ width: "100%", height: "auto" }} // ให้ขยายตาม container
                />
              ) : (
                <div>
                  <Image
                    src="/file_img/no-image.webp"
                    alt="placeholder"
                    width={300}
                    height={300}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }} // ให้ขยายตาม container
                  />
                </div>
              )}

              <div className="product-name">
                {product.product_name.length > 100
                  ? product.product_name.slice(0, 95) + "..."
                  : product.product_name}
              </div>

              <div className="product-price">💰 ฿{product.price}</div>
              <div className="product-description">
                📦 ยอดขาย {formatToThousand(product.order)}
              </div>
              <center>
                <nav aria-label="หน้า Shopee">
                  <a
                    href={product.url_shopee}
                    aria-label={`เข้าดูสินค้า ${product.product_name} บน Shopee`}
                    className="btn btn-danger mt-3 mb-2"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    เข้าดูใน Shopee
                  </a>
                </nav>
              </center>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Section รีวิวจากผู้ใช้จริง */}
      {reviews.length > 0 && (
        <section className="bg-light rounded-3 p-4 mb-3 mt-3 shadow-sm">
          <h2 className="section-heading text-danger text-center fw-bold mb-4">
            🐾 รีวิว {Review} จากผู้ใช้จริง
          </h2>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {reviews.map((review, index) => (
              <div key={index} className="col">
                <div className="card p-3 h-100 shadow-sm border-0">
                  <div className="d-flex align-items-center mb-3">
                    <Image
                      src={`https://i.pravatar.cc/150?img=${index + 2}`}
                      alt={review.name}
                      className="rounded-circle me-3"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                    <div>
                      <strong className="text-pink-contrast">
                        {review.name}
                      </strong>
                      <div className="small text-muted">{review.breed}</div>
                    </div>
                  </div>
                  <h3 className="card-title small text-danger">
                    {review.brand}
                  </h3>
                  <p className="card-text">{review.comment}</p>
                  <span> Rating: {review.rating}/5</span>
                  <span>
                    {[...Array(5)].map((_, i) => {
                      const full = i < Math.floor(review.rating);
                      const half =
                        i === Math.floor(review.rating) &&
                        review.rating % 1 >= 0.5;
                      return full ? "⭐" : half ? "☆ " : "☆ ";
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .text-pink {
              color: #e83e8c;
            }
          `}</style>
        </section>
      )}
      <section aria-labelledby="product-grid">
        <h2 id="product-grid" className="sr-only">
          รายการสินค้า
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqList.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-2 shadow transition"
            >
              {product.url_img.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width="100%"
                  className="vedio_img"
                >
                  <source src={product.url_img} type="video/mp4" />
                  เบราว์เซอร์ของคุณไม่รองรับ video tag
                </video>
              ) : product.url_img.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                <Image
                  src={product.url_img}
                  alt={product.product_name}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="product-image vedio_img"
                  style={{ width: "100%", height: "auto" }} // ให้ขยายตาม container
                />
              ) : (
                <div>
                  <Image
                    src="/file_img/no-image.webp"
                    alt="placeholder"
                    width={300}
                    height={300}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }} // ให้ขยายตาม container
                  />
                </div>
              )}

              <div className="product-name">
                {product.product_name.length > 100
                  ? product.product_name.slice(0, 95) + "..."
                  : product.product_name}
              </div>

              <div className="product-price">💰 ฿{product.price}</div>
              <div className="product-description">
                📦 ยอดขาย {formatToThousand(product.order)}
              </div>
              <center>
                <nav aria-label="หน้า Shopee">
                  <a
                    href={product.url_shopee}
                    aria-label={`เข้าดูสินค้า ${product.product_name} บน Shopee`}
                    className="btn btn-danger mt-3 mb-2"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    เข้าดูใน Shopee
                  </a>
                </nav>
              </center>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Section คำถามที่พบบ่อย */}
      <section
        className="bg-light rounded-3 p-4 mb-3 mt-3 shadow-sm "
        id="faqs"
      >
        <h2 className="section-heading text-danger text-center fw-bold mb-4">
          คำถามที่พบบ่อย (FAQ)
        </h2>

        {faq.length === 0 ? (
          <p className="text-muted">ยังไม่มีคำถามที่พบบ่อย</p>
        ) : (
          faq.map((item, index) => (
            <div key={index} className="faq-item mb-3">
              <h3>
                {index + 1}. {item.question}
              </h3>
              <p>{item.answer}</p>
            </div>
          ))
        )}
      </section>

      <aside className="bg-white p-4 mb-3 mt-3 ">
        <h3 className="section-heading text-danger text-center fw-bold mb-4">
          🔍 คำค้นยอดนิยม ที่เกี่ยวข้องกับหัวข้อนี้
        </h3>
        <ul className="list-unstyled mb-0">         
          {relatedSlugs.map((slug) => (
            <li key={slug} className="mb-2">
            <Link
              key={slug}
              href={`/${slug}`}
              title={ seoMap[slug].title }
              className="btn btn-outline-dark"
            >

              {slug.replaceAll("-", " ")}
            </Link>
            </li>
          ))}
        </ul>
      </aside>

      <section aria-labelledby="product-grid">
        <h2 id="product-grid" className="sr-only">
          รายการสินค้า
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {remainingProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-2 shadow transition"
            >
              {product.url_img.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  width="100%"
                  className="vedio_img"
                >
                  <source src={product.url_img} type="video/mp4" />
                  เบราว์เซอร์ของคุณไม่รองรับ video tag
                </video>
              ) : product.url_img.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                <Image
                  src={product.url_img}
                  alt={product.product_name}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="product-image vedio_img"
                  style={{ width: "100%", height: "auto" }} // ให้ขยายตาม container
                />
              ) : (
                <div>
                  <Image
                    src="/file_img/no-image.webp"
                    alt="placeholder"
                    width={300}
                    height={300}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }} // ให้ขยายตาม container
                  />
                </div>
              )}

              <div className="product-name">
                {product.product_name.length > 100
                  ? product.product_name.slice(0, 95) + "..."
                  : product.product_name}
              </div>

              <div className="product-price">💰 ฿{product.price}</div>
              <div className="product-description">
                📦 ยอดขาย {formatToThousand(product.order)}
              </div>
              <center>
                <nav aria-label="หน้า Shopee">
                  <a
                    href={product.url_shopee}
                    aria-label={`เข้าดูสินค้า ${product.product_name} บน Shopee`}
                    className="btn btn-danger mt-3 mb-2"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    เข้าดูใน Shopee
                  </a>
                </nav>
              </center>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
