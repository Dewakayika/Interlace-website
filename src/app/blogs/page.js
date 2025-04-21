// src/app/blogs/page.js
import Image from 'next/image';
import dynamic from 'next/dynamic';

const BlogCard = dynamic(() => import('../components/BlogCard'), { ssr: false });
const NavbarSmallDark = dynamic(() => import('../components/navbar-small-dark'), { ssr: false });
const Footer = dynamic(() => import('../components/footer'), { ssr: false });

async function fetchBlogs(endpoint) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${endpoint}`, {
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
    console.error('Error fetching data from Strapi:', error);
    return null;
  }
}


// Main Page Component (Server Component)
export default async function BlogsPage() {
  const blogs = await fetchBlogs('/api/blogs?populate=*');
  

  if (!blogs || !blogs.data) {
    return (
        <> 
        <NavbarSmallDark/>
      <div className="container mx-auto py-8 mt-20">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <p className="text-gray-600">No blogs found. Please try again later.</p>
      </div>
      </>
    );
  }

  const sortedBlogs = blogs.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <> 
    <div>
    <NavbarSmallDark/>
    </div>
    
    <div className="container mx-auto py-8 mt-20">
    <div className="relative z-10 text-center md:mt-10 mb-20 md:mb-20">
                    <h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="text-primary-500 text-sm md:text-lg font-medium">
                        Our Blog & Articles
                    </h3>
                    <h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="text-2xl sm:text-2xl md:text-4xl font-bold mt-2 px-4 leading-tight">
                          Keep up with latest <br/> <span className="text-primary-color">news and updates</span>
                    </h2>
                </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
}
