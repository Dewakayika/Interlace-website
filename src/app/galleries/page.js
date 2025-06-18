import NavbarSmallDark from '../components/navbar-small-dark';
import Footer from '../components/footer';
import GalleryClient from '../components/GalleryFeed';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getGalleries() {
  const res = await client.getEntries({
    content_type: 'gallery',
    order: '-fields.createdDate',
  });
  return res.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title || '',
    slug: item.fields.slug || '',
    description: item.fields.description || '',
    image: item.fields.images || null,
    createdDate: item.fields.createdDate || '',
  }));
}

export default async function GalleriesPage() {
  const galleries = await getGalleries();
  return (
    <>
      <NavbarSmallDark />
      <section>
        <div className="container mx-auto py-16 h-6 mt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center">Galleries & Activities</h1>
            <p className="text-gray-600 mb-4 leading-relaxed text-md md:text-lg">
              Explore our latest galleries and our activities.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-16 mt-5 md:mt-14 min-h-screen">
        <GalleryClient galleries={galleries} />
      </div>
      <Footer />
    </>
  );
}