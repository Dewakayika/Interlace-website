import { createClient } from 'contentful';
import Image from 'next/image';
import NavbarSmallDark from '../../components/navbar-small-dark';
import Footer from '../../components/footer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const gallery = await getGalleryData(params.slug);
  if (!gallery) {
    return { title: 'Gallery Not Found' };
  }
  return {
    title: gallery.title,
    description: gallery.description,
    openGraph: {
      title: gallery.title,
      description: gallery.description,
      images: gallery.images && gallery.images.fields?.file?.url ? [gallery.images.fields.file.url.startsWith('http') ? gallery.images.fields.file.url : `https:${gallery.images.fields.file.url}`] : [],
    },
  };
}

async function getGalleryData(slug) {
  const res = await client.getEntries({
    content_type: 'gallery',
    'fields.slug': slug,
    limit: 1,
  });
  if (!res.items.length) return null;
  const item = res.items[0];
  return {
    id: item.sys.id,
    title: item.fields.title || '',
    slug: item.fields.slug || '',
    description: item.fields.description || '',
    images: item.fields.images || null,
    createdDate: item.fields.createdDate || '',
  };
}

export default async function GalleryDetailPage({ params }) {
  const gallery = await getGalleryData(params.slug);
  if (!gallery) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <NavbarSmallDark />
        <div className="text-center text-gray-500 text-xl">Gallery not found.</div>
        <Footer />
      </div>
    );
  }
  const { title, description, images, createdDate } = gallery;
  return (
    <>
      <NavbarSmallDark />
      <div className="container mx-auto py-16 mt-5 md:mt-1 min-h-screen">
        <div className="mb-8">
          <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
            {createdDate ? new Date(createdDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
          </div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          {description && <p className="text-gray-600 mb-6">{description}</p>}
        </div>
        {images && images.fields?.file?.url && (
          <div className="relative aspect-square group mb-8">
            <Image
              src={images.fields.file.url.startsWith('http') ? images.fields.file.url : `https:${images.fields.file.url}`}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
} 