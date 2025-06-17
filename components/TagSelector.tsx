// components/TagSelector.tsx
"use client";
import { useRouter } from "next/navigation";

interface TagSelectorProps {
  decodedSlug: string;
  tags: string[];
}

export default function TagSelector({ decodedSlug, tags }: TagSelectorProps) {
  const router = useRouter();

  return (
  

    <select
      className="form-select"
      defaultValue=""
      aria-label={`เลือกแบรนด์หรือคำค้น: ${decodedSlug}`}
      onChange={(e) => {
        const selectedTag = e.target.value;
        if (selectedTag) {
          router.push(`/${encodeURIComponent(selectedTag)}`);
        }
      }}
    >
      <option value="" disabled>
        เลือกค้นหาข้อมูล: {decodedSlug}
      </option>

      {tags.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>

  );
}
