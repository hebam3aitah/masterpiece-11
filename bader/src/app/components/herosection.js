// components/HeroSection.jsx
 'use client'
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('تعذر تشغيل الفيديو تلقائياً:', error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen">
      {/* طبقة الفيديو */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="herosection.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        
        {/* طبقة التعتيم فوق الفيديو */}
        <div className="absolute inset-0 bg-[#31124b] bg-opacity-60"></div>
      </div>
      
      {/* المحتوى */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            معاً <span className="text-[#fa9e1b]">لإصلاح</span> الحي
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10">
            مبادرة تطوعية تهدف إلى تحسين جودة الحياة في أحيائنا من خلال العمل الجماعي والتعاون المجتمعي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="px-8 py-3 bg-[#fa9e1b] hover:bg-[#e08c18] text-white font-medium rounded-md shadow-lg transition duration-300 text-lg">
              استكشف المشاريع
            </Link>
            <Link href="/register" className="px-8 py-3 bg-[#8d4fff] hover:bg-[#7b3edd] text-white font-medium rounded-md shadow-lg transition duration-300 text-lg">
              انضم إلينا الآن
            </Link>
          </div>
        </div>
      </div>
      
      {/* سهم التمرير لأسفل */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
