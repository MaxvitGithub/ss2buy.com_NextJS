import React from "react";
import Link from "next/link";

export const metadata = {
  title: "เกี่ยวกับเรา | ss2buy",
  description:
    "เว็บไซต์แนะนำสินค้าแบบ Affiliate ที่รวบรวมข้อมูล รีวิว และเปรียบเทียบเพื่อการตัดสินใจซื้อที่คุ้มค่า เชื่อถือได้ เป็นกลาง",
};

export default function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold text-primary fs-4">
            🛒 กลับหน้าแรก 
          </Link>
        </div>
      </nav>

      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white">🛒 เกี่ยวกับเรา</h1>
          <p className="lead text-secondary">
            แหล่งรวมข้อมูลสินค้าและบทความแนะนำเพื่อช่วยให้คุณค้นหา เปรียบเทียบ และตัดสินใจซื้อได้อย่างมั่นใจ
          </p>
        </div>

        {/* Intro Card */}
        <div className="card mb-5 shadow-sm">
          <div className="card-body">
            <p className="card-text">
              ขอต้อนรับสู่ <strong>ss2buy</strong> — ผู้ช่วยในการตัดสินใจซื้อสินค้าที่<br />
              <strong>คัดกรอง วิเคราะห์ และเปรียบเทียบ</strong> ข้อมูลสินค้าอย่างโปร่งใส
            </p>
          </div>
        </div>

        {/* Why Trust Us */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-primary shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-primary">🔍 ทำไมถึงไว้ใจเราได้?</h2>
                <ul className="list-unstyled mt-3">
                  <li>✅ บทความผ่านการวิเคราะห์โดยทีมงาน + AI เพื่อความแม่นยำ</li>
                  <li>✅ รายได้จากลิงก์ Affiliate โปร่งใส ตรวจสอบได้ ไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับคุณ</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-success shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-success">🎯 ภารกิจของเรา</h2>
                <ul className="list-unstyled mt-3">
                  <li>🗂️ รวบรวมข้อมูลสินค้า รีวิวจากผู้ใช้จริง และสเปกที่ชัดเจน</li>
                  <li>💸 เปรียบเทียบราคาจากหลายร้าน เพื่อความคุ้มค่า</li>
                  <li>📈 แนะนำวิธีเลือกซื้อ เทคนิค และอัปเดตเทรนด์ใหม่ๆ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="card mb-5 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">📜 หลักการทำงานของเรา</h2>
            <div className="row mt-3">
              <div className="col-md-4 text-center">
                <p className="fs-1">🧭</p>
                <h5>ความเป็นกลาง</h5>
                <p className="text-muted">ไม่มีอคติต่อแบรนด์ใด</p>
              </div>
              <div className="col-md-4 text-center">
                <p className="fs-1">🔄</p>
                <h5>ความทันสมัย</h5>
                <p className="text-muted">อัปเดตข้อมูลสม่ำเสมอ</p>
              </div>
              <div className="col-md-4 text-center">
                <p className="fs-1">🔍</p>
                <h5>ความจริงใจ</h5>
                <p className="text-muted">คัดกรองนำเสนอให้คุณ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Legal */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-warning shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-warning">⚠️ ข้อจำกัดและความรับผิดชอบ</h2>
                <p>
                  เว็บไซต์ของเราเป็นเพียงผู้ให้ข้อมูล ไม่ได้จำหน่ายสินค้า<br />
                  การซื้อ การจัดส่ง หรือการรับประกัน เป็นหน้าที่ของร้านค้าหรือแพลตฟอร์ม
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-info shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-info">📜 การปฏิบัติตามกฎหมาย</h2>
                <p>
                  ปฏิบัติตาม <strong>พ.ร.บ. คอมพิวเตอร์ พ.ศ. 2550</strong><br />
                  ไม่มีการเก็บข้อมูลส่วนบุคคลโดยไม่ได้รับอนุญาต
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="card mb-5 shadow-sm">
          <div className="card-body text-center">
            <h2 className="card-title">📞 ติดต่อเรา</h2>
            <p className="mb-1">หากคุณมีคำถามหรือข้อเสนอแนะ เรายินดีรับฟังทุกความคิดเห็น</p>
            <p className="mb-0">Line ID: | โทร: <strong>081-582-3485</strong></p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-muted small">
          ขอบคุณที่ไว้วางใจ <strong>ss2buy</strong> ให้เป็นผู้ช่วยในการตัดสินใจซื้อสินค้าของคุณ 🙏
        </p>
      </div>
    </>
  );
}
