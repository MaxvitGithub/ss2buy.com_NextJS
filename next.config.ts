/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export", // ใช้กับ static export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'down-ws-th.img.susercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'down-zl-th.img.susercontent.com',
        pathname: '/**',
      },
    ],
  }, // ✅ ต้องมี comma ปิดก่อนจบบรรทัดนี้
};

module.exports = nextConfig;
