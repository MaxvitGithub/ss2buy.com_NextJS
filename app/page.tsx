import React from "react";
import Link from "next/link";
import { getCatfoods } from "@/data/catfood/getCatfoods";

// ✅ เพิ่ม metadata ที่นี่
export const metadata = {
  title: "🛒 ss2buy.com | เปรียบเทียบก่อนซื้อ ช่วยคุณตัดสินใจได้ง่ายขึ้น",
  description:
    "เว็บไซต์รวมข้อมูล รีวิว และเปรียบเทียบสินค้าคุณภาพจาก Shopee, Lazada และแพลตฟอร์มอื่น ๆ เพื่อให้คุณซื้อได้คุ้มค่าที่สุด พร้อมคำแนะนำแบบโปร่งใส",
};

export default async function Page() {
  const products = await getCatfoods();
  const total = products.length.toLocaleString("th-TH");

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold text-primary fs-4">
            🛒 เปรียบเทียบก่อนซื้อ
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-6 fw-bold mb-3 text-white">
              🧠 ss2buy.com ช่วยคุณตัดสินใจก่อนซื้อ 💡
            </h1>
          </div>
          <p className="lead text-muted">
            เว็บไซต์ของเราเปรียบเทียบสินค้าจาก Shopee, Lazada และร้านค้าชั้นนำ
            เพื่อให้คุณซื้อได้คุ้มค่า ✅ ไม่ต้องเสียเวลาค้นหาเอง ⏱️
          </p>
          <p className="text-muted">
            พบสินค้าทั้งหมด <strong>{total}</strong> รายการ 🎯
          </p>
          <Link href="/about" className="btn btn-primary mt-4">
            📘 เกี่ยวกับเรา
          </Link>
        </div>
      </section>

      {/* หมวดหมู่สินค้า */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">📚 หมวดหมู่ยอดนิยม</h2>
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col">
            <Link href="/อาหารแมว" className="text-decoration-none">
              <div className="card text-center shadow-sm border-1 p-2">
                <div className="card-body py-2">
                  <span className="fs-3">🐱</span>
                  <h6 className="mt-2 mb-0">อาหารแมว</h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link href="/ห้องน้ำแมว" className="text-decoration-none">
              <div className="card text-center shadow-sm border-1 p-2">
                <div className="card-body py-2">
                  <span className="fs-3">🚽</span>
                  <h6 className="mt-2 mb-0">ห้องน้ำแมว</h6>
                </div>
              </div>
            </Link>
          </div>
          {/* เพิ่มหมวดหมู่อื่นได้ที่นี่ */}
        </div>
      </section>

      {/* เกี่ยวกับเว็บ */}
      <section className="bg-light py-4">
        <div className="container text-center">
          <p className="text-muted mb-0">
            🙋‍♀️ เราคัดข้อมูลจากแหล่งที่เชื่อถือได้ พร้อมรีวิวจากผู้ใช้จริง
            เพื่อช่วยให้คุณเปรียบเทียบก่อนซื้อได้อย่างมั่นใจ ✨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-5 py-4 bg-white text-center shadow-sm">
        <div className="container">
          <p className="mb-0 text-muted">
            &copy; 2025 <strong>ss2buy.com</strong> —
            แหล่งรวมสินค้าคุณภาพเพื่อการตัดสินใจที่ดีกว่า
          </p>
        </div>
      </footer>
    </>
  );
}
