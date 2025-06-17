import { seoMap as catSeoMap } from "../catfood/catFoodSeoUrl";
import { seoMap as catToiletSeoMap } from "../cattoilet/catToiletSeoUrl";
import type { SEOData } from "@/app/[slug]/urlseopage";

// รวมทั้งหมด
export const seoMap: Record<string, SEOData> = {
  ...catSeoMap, ...catToiletSeoMap  
};
