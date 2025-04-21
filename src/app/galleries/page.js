import dynamic from 'next/dynamic';

const NavbarSmallDark = dynamic(() => import('../components/navbar-small-dark'), { ssr: false });
const Footer = dynamic(() => import('../components/footer'), { ssr: false });
const GalleryGrid = dynamic(() => import('../components/GalleryGrid'), { ssr: false });

async function fetchGalleries() {
  try {
    const endpoint = '/api/gallleries?populate=*';
    const response = await fetch(`${process.env.STRAPI_API_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching galleries:', error);
    return null;
  }
}

// Page component
export default async function GalleriesPage() {
  const galleries = await fetchGalleries();

  if (!galleries || !galleries.data) {
    return (
      <>
        <NavbarSmallDark />
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6">Gallery</h1>
          <p className="text-gray-600">No images found. Please try again later.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavbarSmallDark />
      <div className="container mx-auto py-8 mt-20">
        <GalleryGrid galleries={galleries.data} />
      </div>
      <Footer />
    </>
  );
}