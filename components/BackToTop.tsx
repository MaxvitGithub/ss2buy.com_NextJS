'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // เมื่อเลื่อนลงมากกว่า 300px ให้แสดงปุ่ม
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-5 right-5 z-50 text-white py-2 px-4 rounded-full
        transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      style={{
        background: '#ff9800',
        border: '2px solid #fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}
