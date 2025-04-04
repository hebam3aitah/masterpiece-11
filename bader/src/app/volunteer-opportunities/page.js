// // app/volunteer-opportunities.js


// const VolunteerOpportunities = () => {
//   return (
//     <div>
//       <div className="text-center p-8">
//         <h1 className="text-3xl font-bold text-gray-800">الفرص التطوعية</h1>
//         <p className="mt-4 text-lg text-gray-600">اكتشف الفرص التطوعية المتاحة للمشاركة في مشاريعنا.</p>
//         {/* يمكنك إضافة قائمة بالفرص التطوعية هنا */}
//       </div>
//     </div>
//   );
// };

// export default VolunteerOpportunities;
// pages/volunteer.js
'use client';

import { useState } from 'react';
import Head from 'next/head';
import { FaHandsHelping, FaUser, FaBriefcase, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    job: '',
    phone: '',
    email: '',
    experience: '',
    interests: '',
    availability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم تقديم طلب التطوع:', formData);
    // هنا يمكنك إضافة الكود الخاص بإرسال البيانات إلى الخادم
    alert('شكراً لتسجيلك كمتطوع! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      age: '',
      job: '',
      phone: '',
      email: '',
      experience: '',
      interests: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen ">
      <Head>
        <title>التسجيل كمتطوع</title>
        <meta name="description" content="نموذج التسجيل كمتطوع" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* رأس النموذج */}
          <div className="bg-[#31124b] p-8 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-[#fa9e1b] rounded-full mb-4">
              <FaHandsHelping className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl font-bold text-white">التسجيل كمتطوع</h1>
            <p className="text-[#fa9e1b] mt-2">انضم إلينا وكن جزءاً من التغيير الإيجابي</p>
          </div>

          {/* نموذج التسجيل */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-gray-50 rtl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* الاسم الكامل */}
              <div>
                <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="name">
                  <span className="flex items-center justify-end gap-2">
                    <FaUser className="text-[#8d4fff]" /> الاسم الكامل
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* العمر */}
              <div>
                <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="age">
                  <span className="flex items-center justify-end gap-2">
                    <FaCalendarAlt className="text-[#8d4fff]" /> العمر
                  </span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="16"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                  placeholder="أدخل عمرك"
                />
              </div>

              {/* الوظيفة/المهنة */}
              <div>
                <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="job">
                  <span className="flex items-center justify-end gap-2">
                    <FaBriefcase className="text-[#8d4fff]" /> الوظيفة/المهنة
                  </span>
                </label>
                <input
                  type="text"
                  id="job"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                  placeholder="أدخل وظيفتك الحالية"
                />
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="phone">
                  <span className="flex items-center justify-end gap-2">
                    <FaPhone className="text-[#8d4fff]" /> رقم الهاتف
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="email">
                  <span className="flex items-center justify-end gap-2">
                    <FaEnvelope className="text-[#8d4fff]" /> البريد الإلكتروني
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              {/* أوقات التطوع المفضلة */}
              <div>
                <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="availability">
                  أوقات التطوع المفضلة
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                >
                  <option value="">اختر الوقت المناسب</option>
                  <option value="weekdays_morning">أيام الأسبوع - صباحًا</option>
                  <option value="weekdays_evening">أيام الأسبوع - مساءً</option>
                  <option value="weekends">عطلة نهاية الأسبوع</option>
                  <option value="flexible">مرن / حسب الحاجة</option>
                </select>
              </div>
            </div>

            {/* الخبرات السابقة */}
            <div>
              <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="experience">
                الخبرات السابقة في مجال التطوع (إن وجدت)
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                placeholder="اذكر خبراتك السابقة في العمل التطوعي"
              ></textarea>
            </div>

            {/* المهارات والاهتمامات */}
            <div>
              <label className="block text-right mb-2 font-semibold text-[#31124b]" htmlFor="interests">
                المهارات والاهتمامات
              </label>
              <textarea
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8d4fff] text-right"
                placeholder="اذكر مهاراتك واهتماماتك التي يمكن أن تفيد في العمل التطوعي"
              ></textarea>
            </div>

            {/* زر التقديم */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#8d4fff] to-[#31124b] text-white font-bold rounded-full transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                تقديم طلب التطوع
              </button>
            </div>
          </form>

          {/* التذييل */}
          <div className="bg-gray-100 p-6 text-center border-t border-gray-200">
            <p className="text-[#31124b]">
              شكراً لاهتمامك بالانضمام إلينا! سنقوم بمراجعة طلبك والتواصل معك في أقرب وقت ممكن.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}