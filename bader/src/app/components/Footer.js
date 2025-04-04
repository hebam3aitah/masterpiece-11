import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#31124b] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          {/* القسم الأول */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">إصلاح الحي</h3>
            <p className="mb-4">
              مبادرة تطوعية تهدف إلى حل مشاكل الحي بطريقة تعاونية وفعالة، من خلال تنظيم الجهود المجتمعية وتوجيهها نحو إحداث تغيير إيجابي.
            </p>
          </div>
          
          {/* القسم الثاني */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">روابط مهمة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#fa9e1b]">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#fa9e1b]">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#fa9e1b]">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#fa9e1b]">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>
          
          {/* القسم الثالث */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">تواصل معنا</h3>
            <div className="space-y-2">
              <p>البريد الإلكتروني: info@eslah-alhay.org</p>
              <p>الهاتف: 0123456789</p>
              <div className="flex justify-end space-x-4 rtl:space-x-reverse mt-4">
                <a href="#" className="hover:text-[#fa9e1b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#fa9e1b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#fa9e1b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} إصلاح الحي - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
