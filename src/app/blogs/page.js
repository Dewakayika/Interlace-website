// src/app/blogs/page.js
import Image from 'next/image';
// import dynamic from 'next/dynamic';
import { createClient } from 'contentful';
import Link from 'next/link';
import { headers } from 'next/headers';
import NavbarSmallDark from '../components/navbar-small-dark';
import Footer from '../components/footer';
import LanguageFilter from './LanguageFilter';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

// Function to detect language from request headers
function detectLanguage(headersList) {
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Check if Indonesian is preferred
  if (acceptLanguage.toLowerCase().includes('id') || acceptLanguage.toLowerCase().includes('id-id')) {
    return 'Indonesia';
  }
  
  // Default to English
  return 'English';
}

async function getBlogs() {
  const entries = await client.getEntries({ content_type: 'blogs' });
  return entries.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    author: item.fields.author,
    thumbnail: item.fields.thumbnail,
    createdDate: item.fields.createdDate,
    blogContent: item.fields.blogContent,
    slug: item.fields.slug,
  }));
}

// Main Page Component (Server Component)
export default async function BlogsPage({ searchParams }) {
  const entries = await client.getEntries({ content_type: 'blogs' });
  const blogs = entries.items;

  if (blogs.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <p>No blogs found. Please try again later.</p>
      </div>
    );
  }

  // Auto-detect language from headers if not explicitly set
  const headersList = headers();
  const detectedLanguage = detectLanguage(headersList);
  
  // Use URL param if set, otherwise use detected language
  const urlLanguage = searchParams?.language;
  const selectedLanguage = urlLanguage || detectedLanguage;
  let filteredBlogs = blogs;
  
  // Filter blogs based on selected language
  if (selectedLanguage && selectedLanguage !== 'All') {
    filteredBlogs = blogs.filter(blog => {
      const articleLanguage = blog.fields.articleLanguage;
      if (Array.isArray(articleLanguage)) {
        return articleLanguage.includes(selectedLanguage);
      }
      return false;
    });
  }

  const sortedBlogs = filteredBlogs.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));
  
  // Pagination logic
  const itemsPerPage = 15;
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex);

  return (
    <>
      <NavbarSmallDark />
      {/* hero section bg image*/}
      <section>
        <div className="container mx-auto py-16 h-6 mt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center">Articles & Blogs</h1>
            <p className="text-gray-600 mb-4 text-sm text-center md:text-md leading-relaxed">
              Stay updated with the latest news and insights from our team.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 min-h-screen mt-10">
        {/* Language Filter Dropdown */}
        <LanguageFilter selectedLanguage={selectedLanguage} detectedLanguage={detectedLanguage} />
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => {
            const { title, author, thumbnail, createdDate, slug, blogContent, category } = blog.fields;
            // Get excerpt from first paragraph or first 120 chars
            let excerpt = '';
            if (blogContent && blogContent.content && blogContent.content.length > 0) {
              const first = blogContent.content.find(c => c.nodeType === 'paragraph');
              if (first && first.content && first.content[0] && first.content[0].value) {
                excerpt = first.content[0].value.substring(0, 120) + (first.content[0].value.length > 120 ? '...' : '');
              }
            }
            return (
              <div key={blog.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:scale-105 transition-all duration-300">
                {thumbnail && thumbnail.fields && (
                  <div className="relative w-full h-56">
                    <Image
                      src={thumbnail.fields.file.url.startsWith('http') ? thumbnail.fields.file.url : `https:${thumbnail.fields.file.url}`}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    {(category || 'Blog') + (createdDate ? ` • ${new Date(createdDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}` : '')}
                  </div>
                  <h2 className="text-lg font-bold mb-2 leading-tight">
                    <Link href={`/blog/${slug.replace(/\s+/g, '-')}`}>{title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm text-gray-400">{author}</span>
                    <Link href={`/blog/${slug.replace(/\s+/g, '-')}`} className="text-primary-600 hover:underline font-medium text-sm">Read More</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results count */}
        <div className="text-center mb-6 text-sm text-gray-60 mt-4">
          Showing {sortedBlogs.length} {sortedBlogs.length === 1 ? 'article' : 'articles'}
          {selectedLanguage && selectedLanguage !== 'All' && (
            <span> in <strong>{selectedLanguage}</strong></span>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-3">
            {currentPage > 1 && (
              <Link
                href={`/blogs?page=${currentPage - 1}${urlLanguage ? `&language=${urlLanguage}` : ''}`}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors"
              >
                Previous
              </Link>
            )}
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/blogs?page=${page}${urlLanguage ? `&language=${urlLanguage}` : ''}`}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === page
                    ? 'bg-primary-600 text-white'
                    : 'hover:bg-gray-100'
                } transition-colors`}
              >
                {page}
              </Link>
            ))}

            {currentPage < totalPages && (
              <Link
                href={`/blogs?page=${currentPage + 1}${urlLanguage ? `&language=${urlLanguage}` : ''}`}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
