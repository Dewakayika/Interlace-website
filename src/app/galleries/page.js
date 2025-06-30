import NavbarSmallDark from '../components/navbar-small-dark';
import Footer from '../components/footer';
import GalleryClient from '../components/GalleryFeed';

// Force dynamic rendering to prevent caching issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Add metadata with cache control headers
export async function generateMetadata() {
  return {
    title: 'Galleries & Activities - Interlace Studies',
    description: 'Explore our latest galleries and activities',
    other: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  };
}

export default async function GalleriesPage() {
  return (
    <>
      <NavbarSmallDark />
      <section>
        <div className="container mx-auto py-16 h-6 mt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center">Galleries & Activities</h1>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm text-center md:text-md md:text-lg">
              Explore our latest galleries and our activities.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-16 mt-5 md:mt-14 min-h-screen">
        <GalleryClient galleries={[]} />
      </div>
      <Footer />
    </>
  );
}