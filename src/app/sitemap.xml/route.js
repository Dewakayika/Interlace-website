import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

// Function to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function GET() {
  try {
    // Get all blogs from Contentful
    const blogEntries = await client.getEntries({ content_type: 'blogs' });
    console.log(`Found ${blogEntries.items.length} blog entries from Contentful`);
    
    // Static pages
    const staticPages = [
      {
        url: 'https://www.interlacestudies.id/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '1.0'
      },
      {
        url: 'https://www.interlacestudies.id/services/education-career',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/english-preparation',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/migration-services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/overseas-health-cover',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/skill-assessment',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/student-visa',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/working-holiday',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/services/working-visa',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        url: 'https://www.interlacestudies.id/blogs',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.7'
      },
      {
        url: 'https://www.interlacestudies.id/galleries',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.6'
      }
    ];

    // Generate blog URLs with proper error handling
    const blogPages = blogEntries.items
      .filter(blog => blog.fields && blog.fields.slug) // Filter out invalid blogs
      .map(blog => {
        try {
          // Clean and format slug properly
          let slug = blog.fields.slug;
          
          // Remove any problematic characters and normalize
          slug = slug
            .replace(/[^\w\s-]/g, '') // Remove special characters except word chars, spaces, and hyphens
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
            .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
          
          // Ensure slug is not empty
          if (!slug) {
            console.warn('Empty slug for blog:', blog.sys?.id);
            return null;
          }
          
          const lastmod = blog.sys.updatedAt ? new Date(blog.sys.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
          
          return {
            url: `https://www.interlacestudies.id/blog/${slug}`,
            lastmod,
            changefreq: 'monthly',
            priority: '0.7'
          };
        } catch (error) {
          console.warn('Error processing blog:', blog.sys?.id, error);
          return null;
        }
      })
      .filter(Boolean); // Remove null entries

    // Combine all pages
    const allPages = [...staticPages, ...blogPages];
    console.log(`Total pages in sitemap: ${allPages.length} (${staticPages.length} static + ${blogPages.length} blogs)`);

    // Generate XML sitemap with proper escaping
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => {
  // Additional validation and escaping
  const url = escapeXml(page.url);
  const lastmod = escapeXml(page.lastmod);
  const changefreq = escapeXml(page.changefreq);
  const priority = escapeXml(page.priority);
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return basic sitemap if Contentful fails
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.interlacestudies.id/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(basicSitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
