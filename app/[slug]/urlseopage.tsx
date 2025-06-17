// /app/[slug]/urlseopage.tsx

// (1) import type ตามปกติ
export type ReviewItem = {
  name: string;
  breed: string;
  brand: string;
  comment: string;
  rating: number;
};

export type WhyChooseItem = {
  title: string;
  detail: string;
};

export type faqItem = {
  question: string;
  answer: string;
};

export type SEOData = {
  title: string;
  description: string;
  keywords: string[];
  whyChoose: WhyChooseItem[];
  reviews: ReviewItem[];
  faq: faqItem[];
};

// (2) import seoMap จาก data
import { seoMap } from "@/data/all/seoMap";
export { seoMap };
