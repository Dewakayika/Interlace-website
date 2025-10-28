import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import NavbarSmallDark from '../../components/navbar-small-dark';
import Footer from '../../components/footer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';

// Helper to generate YouTube embed URL from either an ID or various URL forms
function getYouTubeEmbedUrl(input) {
  if (!input) return null;
  const str = String(input).trim();
  // If already an embed URL or id
  const idMatch = str.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[&?#]|$)/);
  if (idMatch && idMatch[1]) return `https://www.youtube.com/embed/${idMatch[1]}`;
  // short youtu.be links
  const shortMatch = str.match(/youtu\.be\/([0-9A-Za-z_-]{11})/);
  if (shortMatch && shortMatch[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  // if string looks like an id (11 chars)
  if (/^[0-9A-Za-z_-]{11}$/.test(str)) return `https://www.youtube.com/embed/${str}`;
  // fallback: return null
  return null;
}

// Helper to extract YouTube URL from text (description)
function extractYouTubeUrl(text) {
  if (!text) return null;
  const str = String(text).trim();
  // Look for YouTube URLs
  const urlMatch = str.match(/(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([0-9A-Za-z_-]{11})/);
  if (urlMatch) {
    const videoId = urlMatch[4];
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
  // If just an ID
  if (/^[0-9A-Za-z_-]{11}$/.test(str)) return `https://www.youtube.com/watch?v=${str}`;
  return null;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2">{children}</li>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  },
};

// Fetch other blogs for the 'Other Blogs' section
async function getOtherBlogs(currentSlug) {
  const entries = await client.getEntries({ content_type: 'blogs' });
  // Exclude the current blog by slug and limit to 2 blogs
  return entries.items
    .filter(item => item.fields.slug !== currentSlug)
    .slice(0, 2);
}

// Function to get blog data
async function getBlogData(slug) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogs',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0];
  } catch (error) {
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const formattedSlug = slug.replace(/-/g, ' ');
  const blog = await getBlogData(formattedSlug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Interlace Studies',
      description: 'The requested blog post could not be found.',
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  // Get excerpt from first paragraph or first 160 chars
  let excerpt = '';
  if (blog.fields.blogContent && blog.fields.blogContent.content && blog.fields.blogContent.content.length > 0) {
    const first = blog.fields.blogContent.content.find(c => c.nodeType === 'paragraph');
    if (first && first.content && first.content[0] && first.content[0].value) {
      excerpt = first.content[0].value.substring(0, 160) + (first.content[0].value.length > 160 ? '...' : '');
    }
  }

  const title = `${blog.fields.title} | Interlace Studies`;
  const description = excerpt || `Read our article about ${blog.fields.title} on Interlace Studies.`;
  const canonicalUrl = `https://interlacestudies.id/blog/${slug}`;
  const imageUrl = blog.fields.thumbnail?.fields?.file?.url.startsWith('http') 
    ? blog.fields.thumbnail.fields.file.url 
    : `https:${blog.fields.thumbnail?.fields?.file?.url}`;

  return {
    title,
    description,
    metadataBase: new URL('https://interlacestudies.id'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Interlace Studies',
      type: 'article',
      publishedTime: blog.fields.createdDate,
      modifiedTime: blog.sys.updatedAt,
      authors: [blog.fields.author],
      tags: blog.fields.category ? [blog.fields.category] : [],
      images: blog.fields.thumbnail ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.fields.title,
        }
      ] : [],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@interlacestudies',
      site: '@interlacestudies',
      images: blog.fields.thumbnail ? [imageUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-site-verification', // Add your Google verification code
    },
    category: blog.fields.category || 'Blog',
    keywords: [
      blog.fields.category,
      'Interlace Studies',
      'Education',
      'Blog',
      ...(blog.fields.title.split(' ') || []),
    ].filter(Boolean),
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const formattedSlug = slug.replace(/-/g, ' ');
  let entry = null;
  try {
    const entries = await client.getEntries({
      content_type: 'blogs',
      'fields.slug': formattedSlug,
      limit: 1,
    });
    entry = entries.items[0];
  } catch (error) {
    entry = null;
  }

  if (!entry || !entry.fields) {
    return (
      <div className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <p className="text-gray-600">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      </div>
    );
  }

  const blog = entry.fields;
  // Fetch other blogs (exclude current)
  const otherBlogs = await getOtherBlogs(blog.slug);

  return (
    <>
      <NavbarSmallDark />
      <div className="container mx-auto py-16 mt-5 md:mt-14 max-w-6xl min-h-screen">
        {blog.thumbnail && blog.thumbnail.fields && (
          <div className="relative w-full h-72 mb-6">
            <Image
              src={blog.thumbnail.fields.file.url.startsWith('http') ? blog.thumbnail.fields.file.url : `https:${blog.thumbnail.fields.file.url}`}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        )}
        <div className="mb-4 text-xs text-gray-500 uppercase tracking-wide">
          {blog.category || 'Blog'}{blog.createdDate ? ` • ${new Date(blog.createdDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}` : ''}
        </div>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-6">By {blog.author}</p>
        <div className="prose max-w-none mb-8 leading-relaxed">
          {blog.blogContent && documentToReactComponents(blog.blogContent, renderOptions)}
        </div>

        {/* Social Share Buttons */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://interlacestudies.id/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
              aria-label="Share on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://interlacestudies.id/blog/${slug}`)}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
              aria-label="Share on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href={`https://www.instagram.com/share?url=${encodeURIComponent(`https://interlacestudies.id/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white p-3 rounded-full hover:opacity-90 transition-all duration-300"
              aria-label="Share on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a
              href={`https://www.tiktok.com/share?url=${encodeURIComponent(`https://interlacestudies.id/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
              aria-label="Share on TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a
              href={`https://www.youtube.com/share?url=${encodeURIComponent(`https://interlacestudies.id/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
              aria-label="Share on YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

          {/* YouTube Video (if present) */}
          {blog.youtubeVideo && (
            (() => {
              const embedUrl = getYouTubeEmbedUrl(blog.youtubeVideo);
              if (!embedUrl) return null;
              return (
                <div className="mb-12">
                  <h3 className="text-lg font-semibold mb-4">Video</h3>
                  <div className="w-full" style={{ position: 'relative', paddingTop: '56.25%' }}>
                    <iframe
                      src={embedUrl}
                      title={blog.title + ' - video'}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen 
                    />
                  </div>
                </div>
              );
            })()
          )}

          {/* Attachments / Files (if present) - render as 3-column cards */}
          {blog.attachment && Array.isArray(blog.attachment) && blog.attachment.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-6">Attachments</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blog.attachment.map((asset) => {
                  const file = asset?.fields?.file;
                  if (!file) return null;
                  const url = file.url && file.url.startsWith('http') ? file.url : `https:${file.url}`;
                  const name = asset?.fields?.title || file.fileName || (file.url ? file.url.split('/').pop() : 'Download');
                  const contentType = file.contentType || '';
                  const isImage = contentType.startsWith('image/');

                  return (() => {
                    const youtubeUrl = extractYouTubeUrl(asset?.fields?.description);
                    const CardContent = (
                      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                        {isImage ? (
                          <div className="relative w-full h-40">
                            <Image
                              src={url}
                              alt={name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-40 bg-gray-50">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17a2 2 0 01-2-2V7a2 2 0 012-2h6l6 6v6a2 2 0 01-2 2H7z"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    );

                    if (youtubeUrl) {
                      return (
                        <a
                          key={asset?.sys?.id || url}
                          href={youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {CardContent}
                        </a>
                      );
                    } else {
                      return (
                        <div key={asset?.sys?.id || url}>
                          {CardContent}
                        </div>
                      );
                    }
                  })();
                })}
              </div>
            </div>
          )}

        {/* Other Blogs Section */}
        {otherBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Other Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherBlogs.map((other) => {
                const { title, author, thumbnail, createdDate, slug, category} = other.fields;
                return (
                  <div key={other.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:scale-105 transition-all duration-300">
                    {thumbnail && thumbnail.fields && (
                      <div className="relative w-full h-48">
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
                      <h3 className="text-lg font-bold mb-2 leading-tight">
                        <a href={`/blog/${slug.replace(/\s+/g, '-')}`}>{title}</a>
                      </h3>
                      <span className="text-sm text-gray-400 mt-auto">{author}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
} 