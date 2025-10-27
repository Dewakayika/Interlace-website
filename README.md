# 🎓 Interlace Studies - Education & Migration Consultancy

Website resmi untuk **Interlace Studies**, konsultan pendidikan dan migrasi terkemuka yang membantu individu mewujudkan impian mereka untuk belajar dan bermigrasi di Australia.

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Contentful](https://img.shields.io/badge/Contentful-CMS-FF6B6B?style=for-the-badge&logo=contentful)

## 🌟 Fitur Utama

### 🎯 Layanan Pendidikan & Migrasi
- **Student Visa** - Bantuan visa pelajar Australia
- **Working Visa** - Konsultasi visa kerja
- **Working Holiday** - Program working holiday visa
- **Education & Career** - Konsultasi pendidikan dan karir
- **English Preparation** - Persiapan bahasa Inggris
- **Migration Services** - Layanan migrasi komprehensif
- **Skill Assessment** - Penilaian keterampilan
- **Overseas Health Cover** - Asuransi kesehatan luar negeri

### 🚀 Teknologi & Fitur Website
- **Responsive Design** - Optimal di semua perangkat
- **Modern UI/UX** - Desain yang elegan dan user-friendly
- **Dynamic Content** - Integrasi dengan Contentful CMS
- **SEO Optimized** - Optimasi untuk mesin pencari
- **Fast Loading** - Performa tinggi dengan Next.js
- **Interactive Animations** - Animasi Lottie yang menarik
- **Contact Integration** - Integrasi WhatsApp untuk konsultasi

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Next.js 14.1.0** - React framework dengan SSR/SSG
- **React 18** - Library UI modern
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Framer Motion** - Animasi dan transisi
- **React Scroll** - Smooth scrolling
- **React Masonry CSS** - Layout masonry untuk galeri

### Backend & CMS
- **Contentful** - Headless CMS untuk konten dinamis
- **Vercel Analytics** - Analytics dan monitoring
- **Vercel Speed Insights** - Monitoring performa

### Icons & Assets
- **Iconsax React** - Icon library modern
- **React Feather** - Icon set tambahan
- **Material Design Icons** - Icon set komprehensif
- **Lottie Animations** - Animasi interaktif

## 📦 Instalasi & Setup

### Prerequisites
Sebelum memulai, pastikan Anda telah menginstall:
- **Node.js 18+** - [Download di sini](https://nodejs.org/)
- **npm** (otomatis terinstall dengan Node.js) atau **yarn** - [Install yarn](https://yarnpkg.com/getting-started/install)
- **Git** - [Download di sini](https://git-scm.com/)
- **Akun Contentful** - [Daftar gratis](https://www.contentful.com/) (untuk CMS)

### 1. Clone Repository
```bash
# Clone repository dari GitHub
git clone https://github.com/yourusername/ovaxo-nextjs.git

# Masuk ke direktori project
cd ovaxo-nextjs
```

### 2. Install Dependencies

#### Menggunakan npm (Recommended)
```bash
# Install semua dependencies
npm install

# Atau jika ingin install dengan versi exact
npm ci
```

#### Menggunakan yarn
```bash
# Install semua dependencies
yarn install

# Atau jika ingin install dengan versi exact
yarn install --frozen-lockfile
```

#### Menggunakan pnpm (Alternative)
```bash
# Install pnpm terlebih dahulu
npm install -g pnpm

# Install dependencies
pnpm install
```

### 3. Environment Variables
Buat file `.env.local` di root directory project:

```env
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

**Cara mendapatkan Contentful credentials:**
1. Login ke [Contentful](https://app.contentful.com/)
2. Pilih space Anda
3. Go to **Settings** > **API keys**
4. Copy **Space ID** dan **Content Delivery API - access token**

### 4. Verifikasi Instalasi
```bash
# Cek versi Node.js (minimal 18.0.0)
node --version

# Cek versi npm
npm --version

# Cek apakah dependencies terinstall dengan benar
npm list --depth=0
```

### 5. Run Development Server
```bash
# Menggunakan npm
npm run dev

# Menggunakan yarn
yarn dev

# Menggunakan pnpm
pnpm dev
```

Website akan tersedia di [http://localhost:3000](http://localhost:3000)

### 6. Troubleshooting Instalasi

#### Jika ada error saat install dependencies:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules dan package-lock.json
rm -rf node_modules package-lock.json

# Install ulang
npm install
```

#### Jika ada error dengan Node.js version:
```bash
# Cek versi Node.js
node --version

# Jika versi < 18, update Node.js
# Download dari https://nodejs.org/ atau gunakan nvm
```

#### Jika ada error dengan Contentful:
```bash
# Pastikan environment variables sudah benar
# Cek file .env.local ada di root directory
# Pastikan tidak ada spasi di sekitar = pada .env.local
```

### 7. Dependencies yang Diinstall

#### Production Dependencies
- **@contentful/rich-text-react-renderer** - Render rich text dari Contentful
- **@lottiefiles/dotlottie-react** - Animasi Lottie
- **@radix-ui/react-hover-card** - UI component library
- **@vercel/analytics** - Analytics tracking
- **@vercel/speed-insights** - Performance monitoring
- **contentful** - Contentful SDK
- **framer-motion** - Animasi library
- **iconsax-react** - Icon library
- **next** - Next.js framework
- **react** - React library
- **react-dom** - React DOM
- **react-feather** - Icon set
- **react-masonry-css** - Masonry layout
- **react-scroll** - Smooth scrolling
- **sharp** - Image optimization

#### Development Dependencies
- **autoprefixer** - CSS vendor prefixes
- **eslint** - Code linting
- **eslint-config-next** - Next.js ESLint config
- **postcss** - CSS post-processor
- **tailwindcss** - CSS framework

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables
4. Deploy otomatis

### Manual Build
```bash
npm run build
npm run start
```

## 📁 Struktur Project

```
src/
├── app/
│   ├── components/          # Komponen React
│   ├── services/           # Halaman layanan
│   ├── blog/              # Halaman blog
│   ├── galleries/         # Halaman galeri
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── lib/
│   └── contentful.js     # Contentful configuration
└── assets/
    ├── css/             # CSS files
    └── fonts/           # Font files
```

## 🎨 Customization

### Warna & Tema
Edit `tailwind.config.js` untuk mengubah:
- Color palette
- Typography
- Spacing
- Breakpoints

### Konten
- **Blog**: Kelola melalui Contentful CMS
- **Galeri**: Upload gambar melalui admin panel
- **Layanan**: Edit di folder `src/app/services/`

## 📱 Responsive Design

Website dioptimalkan untuk:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Scripts Available

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint checking
npm run generate-sitemap  # Generate sitemap
```

## 📊 Performance Features

- ⚡ **Image Optimization** - Next.js Image component
- 🚀 **Code Splitting** - Dynamic imports
- 📦 **Bundle Optimization** - Tree shaking
- 🎯 **SEO Ready** - Meta tags & sitemap
- 📈 **Analytics** - Vercel Analytics integration

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact & Support

- **Website**: [Interlace Studies](https://yourdomain.com)
- **WhatsApp**: [+62 858-4741-9359](https://wa.me/+6285847419359)
- **Email**: info@interlacestudies.com

## 🙏 Acknowledgments

- Icons oleh [Iconsax](https://iconsax.io)
- Animations oleh [LottieFiles](https://lottiefiles.com)
- Images dari [Unsplash](https://unsplash.com)

---

⭐ **Jika project ini membantu Anda, jangan lupa berikan star!** ⭐
