/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ss2buy.com", // เปลี่ยนเป็นโดเมนของคุณ
  generateRobotsTxt: true, // สร้าง robots.txt ให้ด้วย
  changefreq: "weekly", // ค่า default สำหรับทุก URL
  priority: 0.8, // ค่า default สำหรับทุก URL นอกจากหน้าแรก
  sitemapSize: 7000, // แบ่งไฟล์เมื่อมีลิงก์เยอะ
  transform: async (config, url) => {
    let changefreq = "monthly";
    let priority = 0.7;

    if (url === config.siteUrl + "/") {
      changefreq = "daily";
      priority = 1.0;
    } else if (url === config.siteUrl + "/อาหารแมว/") {
      changefreq = "weekly";
      priority = 0.9;
    } else if (url.startsWith(config.siteUrl + "/อาหารแมว/")) {
      // สินค้าแต่ละตัว
      changefreq = "monthly";
      priority = 0.8;
    }

    return {
      loc: url,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  exclude: ["/404"], // ถ้าต้องการ exclude หน้าอื่นๆ
};
