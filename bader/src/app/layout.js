// app/layout.js
import '../styles/globals.css';  // تأكد من استيراد الأنماط
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="ar"><body className="bg-gray-100"> {/* تأكد من عدم وجود مسافات بيضاء بين هذه العلامات */}
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </body></html>
  );
}
