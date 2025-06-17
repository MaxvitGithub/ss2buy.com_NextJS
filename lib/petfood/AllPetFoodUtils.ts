
// ลิ้ง URL SEO ทั้งหมด
export const catfoodFiles = [
  "อาหารแมว",
  "อาหารแมว-Me-O",
  "อาหารแมว-Whiskas",
  "อาหารแมว-Purina-One",
  "อาหารแมว-kaniva",
  "อาหารแมว-Royal-Canin",
  "อาหารแมว-Hill-s-Science-Diet",
  "ขนมแมวเลีย",
  "อาหารแมว-เกรดพรีเมียม",
  "อาหารแมว-ราคาถูก",
  "อาหารแมว-แบบเปียก",
  "อาหารแมว-แบบเม็ด",
  "อาหารแมว-กระป๋อง",
  "อาหารแมว-สูตรแพ้ง่าย",
  "อาหารแมว-สำหรับแมวโต",
  "อาหารแมว-สำหรับแมวเด็ก",
  "อาหารแมว-สูตรสำหรับ-แมวสูงวัย",
  "อาหารแมว-สูตรควบคุมน้ำหนัก",
  "อาหารแมว-สูตร-คุม-โรคไต",
  "อาหารแมว-ลดขนร่วง",
  "อาหารแมว-บำรุง-ขน",
  "อาหารแมวบำรุง-สายตา",
  "อาหารแมว-สูตรควบคุม-เบาหวาน",
  "อาหารแมว-ลดน้ำหนัก-แมวอ้วน",
  "อาหารแมว-ยี่ห้อไหน-ดีที่สุด",
  "อาหารแมว-ราคาส่ง",
  "อาหารแมว-โฮลิสติก",
  "อาหารแมว-ยี่ห้อไหนดี-ลดกลิ่น" 
]

// === ห้องน้ำแมว ===
export const catToiletFiles = [
  "ห้องน้ำแมว",
  "ห้องน้ำแมว-เก็บกลิ่น", 
  "ห้องน้ำแมว-อัตโนมัติ",
  "ห้องน้ำแมว-อัตโนมัติ-ยี่ห้อไหนดี",  
   // === ทรายแมว ===
  "ทรายแมว",
  "ทรายแมว-ยี่ห้อไหนดี",
  "ทรายแมวยี่ห้อไหนดี-2025",
  "10-ทรายแมวยี่ห้อไหนดี",
  "ทรายแมว-ดูดซับกลิ่น",
  "ทรายแมว-จับตัวเป็นก้อน",
  "ทรายแมว-เบนโทไนท์",
  "ทรายแมว-เต้าหู้",
  "ทรายแมว-เต้าหู้-ดีไหม",  
  "ทรายแมว-เต้าหู้-ยี่ห้อไหนดี"
 ]


// ✅ รวมข้อมูลทั้งหมด
export function getKeyTag(products: { tags: string[] }[]): string | null {
  return products.length > 0 ? products[0].tags[0] : null;
}

// ✅ ใส่ หัวเมนูเว็บ เลือก URL จากลิ้ง
export function getFoodTags(keytag: string | null): string[] {
  if (!keytag) return [];
  switch (keytag) {
    case "อาหารแมว":
      return [...catfoodFiles];
    case "ห้องน้ำแมว":
      return [...catToiletFiles];
    case "ทรายแมว":
      return [...catToiletFiles];
    default:
      return [];
  }
}


export function getRandomSlugsFromTags(
  currentSlug: string,
  foodTags: string[],
  count: number = 4
): string[] {
  // ตัด slug ตัวเองออกก่อน
  const pool = foodTags.filter((slug) => slug !== currentSlug);

  // สุ่ม 4 รายการจาก pool
  const shuffled = [...pool].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, Math.min(count, shuffled.length));
}


// ✅ ใส่ Tags["",""] Keywords
export function getSearchKeywords(decodedSlug: string): string[] {
  if (decodedSlug === "อาหารแมว-ยี่ห้อไหน-ดีที่สุด") {
    return [
      "อาหารแมว-Whiskas",
      "อาหารแมว-Purina-One",
      "อาหารแมว-Me-O",
      "อาหารแมว-Royal-Canin",
      "อาหารแมว-kaniva"
    ];
  }

  if (decodedSlug === "ห้องน้ำแมว-อัตโนมัติ-ยี่ห้อไหนดี") {
    return ["ห้องน้ำแมว"];
  }
  
  if (
    ["ทรายแมว-ยี่ห้อไหนดี", "ทรายแมวยี่ห้อไหนดี-2025", "10-ทรายแมวยี่ห้อไหนดี"].includes(decodedSlug)
  ) {
    return ["ทรายแมว"];
  }

  if (
    ["ทรายแมว-เต้าหู้", "ทรายแมว-เต้าหู้-ยี่ห้อไหนดี", "ทรายแมว-เต้าหู้-ดีไหม"].includes(decodedSlug)
  ) {
    return ["ทรายแมว-เต้าหู้"];
  }

  return [decodedSlug];
}


// ✅ รวมทั้งหมด ลิ้ง ของ sitemap.xml ที่จะ Build out/
// รวมไฟล์ทั้งหมดไว้ใน AllPetfoodSlug[]
export const allPetfoodFiles = [...catfoodFiles, ...catToiletFiles] as const;

// รวม type ทั้งหมดแบบ auto จาก array ที่รวมไว้
export type AllPetfoodSlug = typeof allPetfoodFiles[number];



