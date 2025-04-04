
// // export default HomePage;
// import Head from 'next/head';
// import HomePage from './components/homepage';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>إصلاح الحي - معاً لمجتمع أفضل</title>
//         <meta name="description" content="مبادرة تطوعية تهدف إلى تحسين جودة الحياة في الأحياء من خلال العمل الجماعي والتعاون المجتمعي" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <HomePage />
//     </>
//   );
// }
// pages/index.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Head>
        <title>مبادرة إصلاح الحي</title>
        <meta name="description" content="مبادرة لإصلاح مشاكل الحي والارتقاء بالمجتمع" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* الهيدر */}
      <header className="bg-[#31124b] shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-[#fa9e1b] text-2xl font-bold">مبادرة إصلاح الحي</div>
          
          {/* قائمة للشاشات الكبيرة */}
          <nav className="hidden md:flex space-x-4 space-x-reverse">
            <Link href="/" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
              الرئيسية
            </Link>
            <Link href="/about" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
              عن المبادرة
            </Link>
            <Link href="/projects" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
              المشاريع
            </Link>
            <Link href="/contact" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
              تواصل معنا
            </Link>
            <Link href="/support" className="bg-[#fa9e1b] text-[#31124b] hover:bg-[#8d4fff] hover:text-white px-4 py-2 rounded-lg transition-colors font-bold">
              كن داعماً
            </Link>
          </nav>
          
          {/* زر القائمة للشاشات الصغيرة */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* القائمة المنسدلة للشاشات الصغيرة */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#31124b] shadow-lg">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <Link href="/" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
                عن المبادرة
              </Link>
              <Link href="/projects" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
                المشاريع
              </Link>
              <Link href="/contact" className="text-white hover:text-[#fa9e1b] px-3 py-2 transition-colors">
                تواصل معنا
              </Link>
              <Link href="/support" className="bg-[#fa9e1b] text-[#31124b] hover:bg-[#8d4fff] hover:text-white px-4 py-2 rounded-lg transition-colors font-bold text-center">
                كن داعماً
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* بانر رئيسي */}
      <div className="bg-gradient-to-br from-[#31124b] to-[#8d4fff] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">معاً لحي أفضل</h1>
          <p className="text-xl mb-8">منصة تجمع المجتمع والداعمين لتحويل مشاكل الحي إلى فرص للتطوير والتنمية المستدامة</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/projects" className="bg-[#fa9e1b] text-[#31124b] hover:bg-white px-6 py-3 rounded-lg transition-colors font-bold text-lg">
              استكشف المشاريع
            </Link>
            <Link href="/support" className="bg-white text-[#31124b] hover:bg-[#fa9e1b] px-6 py-3 rounded-lg transition-colors font-bold text-lg">
              كن جزءاً من المبادرة
            </Link>
          </div>
        </div>
      </div>

      {/* قسم المميزات */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#31124b]">كيف نعمل على تحسين الحي؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#8d4fff] text-4xl mb-4 flex justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#31124b] text-center">تحديد المشاكل</h3>
              <p className="text-gray-700 text-center">نستمع لسكان الحي ونقوم بتحليل ودراسة المشاكل الملحة التي تواجه مجتمعنا</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#fa9e1b] text-4xl mb-4 flex justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#31124b] text-center">تكوين فرق العمل</h3>
              <p className="text-gray-700 text-center">نجمع المتطوعين والداعمين من أصحاب الخبرات المتنوعة للعمل على حل مشاكل الحي</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#31124b] text-4xl mb-4 flex justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#31124b] text-center">تنفيذ المشاريع</h3>
              <p className="text-gray-700 text-center">ننفذ الحلول العملية ونقيم تأثيرها في المجتمع مع المتابعة المستمرة لضمان نجاحها</p>
            </div>
          </div>
        </div>
      </div>

      {/* قسم الإحصائيات */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#31124b]">أثر مبادرتنا بالأرقام</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-[#fa9e1b] text-4xl font-bold mb-2">+15</div>
              <p className="text-gray-700">مشروع تم إنجازه</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-[#8d4fff] text-4xl font-bold mb-2">+1500</div>
              <p className="text-gray-700">مستفيد من المبادرة</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-[#31124b] text-4xl font-bold mb-2">+200</div>
              <p className="text-gray-700">متطوع نشط</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-[#fa9e1b] text-4xl font-bold mb-2">+25</div>
              <p className="text-gray-700">جهة داعمة</p>
            </div>
          </div>
        </div>
      </div>

      {/* قسم آخر المشاريع */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#31124b]">آخر مشاريعنا</h2>
          <p className="text-center text-gray-700 mb-12">تعرّف على بعض المشاريع التي نعمل عليها حالياً</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#31124b]">تخضير الحي</h3>
                <p className="text-gray-700 mb-4">مشروع لزراعة الأشجار وإنشاء مساحات خضراء في الأماكن المهملة بالحي</p>
                <Link href="/projects/1" className="text-[#8d4fff] hover:text-[#fa9e1b] font-semibold inline-flex items-center">
                  التفاصيل 
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#31124b]">صيانة ملعب الحي</h3>
                <p className="text-gray-700 mb-4">إعادة تأهيل وصيانة الملعب الرياضي ليكون وجهة آمنة ومناسبة للشباب</p>
                <Link href="/projects/2" className="text-[#8d4fff] hover:text-[#fa9e1b] font-semibold inline-flex items-center">
                  التفاصيل 
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#31124b]">تطوير المكتبة العامة</h3>
                <p className="text-gray-700 mb-4">تجديد المكتبة العامة وتزويدها بالكتب وتقنيات التعلم الحديثة</p>
                <Link href="/projects/3" className="text-[#8d4fff] hover:text-[#fa9e1b] font-semibold inline-flex items-center">
                  التفاصيل 
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="bg-[#31124b] text-white hover:bg-[#8d4fff] px-6 py-3 rounded-lg transition-colors font-bold inline-block">
              جميع المشاريع
            </Link>
          </div>
        </div>
      </div>

      {/* قسم الدعم */}
      <div className="py-16 px-4 bg-gradient-to-br from-[#31124b] to-[#8d4fff] text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">كن جزءاً من التغيير</h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">نحتاج إلى دعمكم لنحقق طموحاتنا في إصلاح الحي وخلق بيئة أفضل للجميع. يمكنكم المساهمة بالوقت، الخبرة، أو الدعم المادي.</p>
          
          <div className="text-center">
            <Link href="/support" className="bg-[#fa9e1b] text-[#31124b] hover:bg-white px-8 py-4 rounded-lg transition-colors font-bold text-xl inline-block">
              كن داعماً الآن
            </Link>
          </div>
        </div>
      </div>

      {/* الفوتر */}
      <footer className="bg-[#31124b] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">مبادرة إصلاح الحي</h3>
              <p className="text-gray-300">معاً نبني مجتمعاً أفضل من خلال مشاريع تلبي احتياجات الحي وتطلعات سكانه.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">عن المبادرة</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">المشاريع</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">تواصل معنا</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors">كن داعماً</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-[#fa9e1b]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>المملكة العربية السعودية</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-[#fa9e1b]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+966 50 123 4567</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-[#fa9e1b]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>info@neighborhood-initiative.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#fa9e1b]">تابعنا</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2 text-[#fa9e1b]">النشرة الإخبارية</h3>
                <form className="flex mt-4">
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني" 
                    className="px-4 py-2 w-full rounded-r-lg focus:outline-none text-gray-900" 
                  />
                  <button 
                    type="submit" 
                    className="bg-[#fa9e1b] hover:bg-[#8d4fff] text-white px-4 py-2 rounded-l-lg transition-colors"
                  >
                    اشتراك
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} مبادرة إصلاح الحي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}