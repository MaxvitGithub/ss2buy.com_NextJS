import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: number;
  product_name: string;
  tags: string[];
  order: string;
  price: number;
  url_img: string;
  url_shopee: string;
};

  const filenames = [
    "ห้องน้ำแมว.json",
    "ห้องน้ำแมว-อัตโนมัติ.json",
    "ห้องน้ำแมว-เก็บกลิ่น.json",
    //ทรายแมว
    "ทรายแมว.json",
    "ทรายแมว-ดูดซับกลิ่น.json",
    "ทรายแมว-จับตัวเป็นก้อน.json",
    "ทรายแมว-เต้าหู้.json",
    "ทรายแมว-เบนโทไนท์.json"   
  ];

export async function getToilets() {
  const dataDir = path.join(process.cwd(), "data/cattoilet");
  const products = await Promise.all(
    filenames.map(async (filename) => {
      const file = await fs.readFile(path.join(dataDir, filename), "utf-8");
      return JSON.parse(file);
    })
  );

  return products.flat(); 
}
