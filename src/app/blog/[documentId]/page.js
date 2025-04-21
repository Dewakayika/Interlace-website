// src/app/blogs/[id]/page.js
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NavbarSmallDark = dynamic(() => import('../../components/navbar-small-dark'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer'), { ssr: false });

async function fetchBlogDetail(documentId) {
  try {
    const response = await fetch(`${process.env.STRAPI_API_URL}/api/blogs/${documentId}?populate=*`, {
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
    console.error('Error fetching blog detail:', error);
    return null;
  }
}


export default async function BlogDetail({ params }) {
  const blog = await fetchBlogDetail(params.documentId);


  if (!blog || !blog.data) {
    return (
      <>
        <NavbarSmallDark />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
            <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
            <p className="text-gray-600">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          </div>
        </div>
      </>
    );
  }


  const { Tittle, Descriptions, author, Image: BlogImage, createdAt } = blog.data;
  

  return (
    <>
      <NavbarSmallDark />

      <article className="container mx-auto px-4 py-8 mt-32">
        <div className="max-w-3xl mx-auto">

          <Link 
            href="/blogs"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{Tittle}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span className="mr-4">By {author}</span>
              <span>{new Date(createdAt).toLocaleDateString()}</span>
            </div>
          </header>

          
          {BlogImage && BlogImage.length > 0 && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={`${process.env.STRAPI_API_URL}${BlogImage[0]?.url}`}
                alt={Tittle}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          
          <div className="prose prose-lg max-w-none">
            {Descriptions && Descriptions.map((desc, index) => (
              <div key={index} className="mb-6">
                {desc.children.map((child, childIndex) => (
                  <p key={childIndex} className="text-gray-800 leading-relaxed">
                    {child.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
