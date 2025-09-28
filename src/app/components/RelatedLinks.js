import Link from 'next/link';

export default function RelatedLinks() {
  const relatedLinks = [
    {
      title: "Konsultasi Gratis",
      description: "Konsultasi gratis untuk studi dan kerja di Australia. Tim berpengalaman siap membantu perjalanan Anda.",
      href: "/contact",
      icon: "💬"
    },
    {
      title: "Layanan Kami", 
      description: "Student Visa, Working Holiday Visa, Skill Assessment, dan layanan migrasi Australia lainnya.",
      href: "/services",
      icon: "🎓"
    },
    {
      title: "Blog & Tips",
      description: "Panduan lengkap, tips, dan informasi terbaru tentang studi dan kerja di Australia.",
      href: "/blogs", 
      icon: "📝"
    },
    {
      title: "Galeri Aktivitas",
      description: "Lihat aktivitas dan kesuksesan klien kami dalam meraih impian studi di Australia.",
      href: "/galleries",
      icon: "📸"
    },
    {
      title: "Working Holiday Visa",
      description: "Panduan lengkap Working Holiday Visa 462 untuk WNI. Syarat, proses, dan tips sukses.",
      href: "/services/working-holiday",
      icon: "✈️"
    },
    {
      title: "Student Visa Australia", 
      description: "Bimbingan lengkap untuk mendapatkan Student Visa Australia. Dari pemilihan kursus hingga visa.",
      href: "/services/student-visa",
      icon: "🎯"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
          Jelajahi Layanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{link.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
