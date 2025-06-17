import { getCatfoods } from "@/data/catfood/getCatfoods";
import { getToilets } from "@/data/cattoilet/getToilets";


export type Product = {
  id: number;
  product_name: string;
  tags: string[];
  order: string;
  price: number;
  url_img: string;
  url_shopee: string;
};

export async function getAllPetfoods(): Promise<Product[]> {
  const [catfoods, toilets] = await Promise.all([
    getCatfoods(),
    getToilets(),
  ]);
  return [...catfoods, ...toilets];
}
