/** @type {import('next').NextConfig} */

const hosts = [
  'i.pravatar.cc',
  'down-ws-th.img.susercontent.com',
  'down-zl-th.img.susercontent.com',
  'down-bs-th.img.susercontent.com',  
];

const nextConfig = {
  
  output: "export", 
  images: {
    unoptimized: true,
    remotePatterns: hosts.map((host) => ({
      protocol: 'https',
      hostname: host,
      pathname: '/**',
    })),
  },
};

module.exports = nextConfig;
