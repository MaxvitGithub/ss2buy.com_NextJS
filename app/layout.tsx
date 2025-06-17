// app/layout.tsx
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={prompt.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Speed optimisations */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />

        {/* ✅ ใช้งานจริงของ Bootstrap */}
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />

        {/* ✅ fallback สำหรับกรณี JS ถูกปิด */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          />
        </noscript>

      </head>

      <body>
        {children}

        {/* ปุ่ม Back to Top */}
        <BackToTop />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
