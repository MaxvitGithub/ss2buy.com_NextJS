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
    "อาหารแมว.json",
    "อาหารแมว-Me-O.json",
    "อาหารแมว-Whiskas.json",
    "อาหารแมว-Purina-One.json",
    "อาหารแมว-kaniva.json",
    "อาหารแมว-Royal-Canin.json",
    "อาหารแมว-Hill-s-Science-Diet.json",
    "อาหารแมว-เกรดพรีเมียม.json",
    "อาหารแมว-ราคาถูก.json",
    "อาหารแมว-แบบเปียก.json",
    "อาหารแมว-แบบเม็ด.json",
    "อาหารแมว-กระป๋อง.json",
    "อาหารแมว-สูตรแพ้ง่าย.json",
    "อาหารแมว-สำหรับแมวโต.json",
    "อาหารแมว-สำหรับแมวเด็ก.json",
    "อาหารแมว-สูตรสำหรับ-แมวสูงวัย.json",
    "อาหารแมว-สูตรควบคุมน้ำหนัก.json",
    "อาหารแมว-สูตร-คุม-โรคไต.json",
    "อาหารแมว-ลดขนร่วง.json",
    "อาหารแมว-บำรุง-ขน.json",
    "อาหารแมวบำรุง-สายตา.json",
    "อาหารแมว-สูตรควบคุม-เบาหวาน.json",
    "อาหารแมว-ลดน้ำหนัก-แมวอ้วน.json",
    "อาหารแมว-ราคาส่ง.json",
    "อาหารแมว-โฮลิสติก.json",
    "อาหารแมว-ยี่ห้อไหนดี-ลดกลิ่น.json",
    "ขนมแมวเลีย.json"
  ];

export async function getCatfoods() {
  const dataDir = path.join(process.cwd(), "data/catfood");
  const products = await Promise.all(
    filenames.map(async (filename) => {
      const file = await fs.readFile(path.join(dataDir, filename), "utf-8");
      return JSON.parse(file);
    })
  );

  return products.flat(); 
}
