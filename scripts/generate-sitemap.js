const { createClient } = require('contentful');
const fs = require('fs');
const path = require('path');

// Contentful configuration
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

async function generateSitemap() {
  try {
    console.log('🔄 Fetching blogs from Contentful...');
    
    // Get all blogs from Contentful
    const blogEntries = await client.getEntries({ content_type: 'blogs' });
    console.log(`✅ Found ${blogEntries.items.length} blog posts`);
    
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

    // Generate blog URLs
    const blogPages = blogEntries.items.map(blog => {
      const slug = blog.fields.slug.replace(/\s+/g, '-');
      const lastmod = blog.sys.updatedAt ? new Date(blog.sys.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
      
      return {
        url: `https://www.interlacestudies.id/blog/${slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: '0.7'
      };
    });

    // Combine all pages
    const allPages = [...staticPages, ...blogPages];

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write to public directory
    const publicDir = path.join(__dirname, '..', 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📄 Total pages: ${allPages.length}`);
    console.log(`📝 Blog posts: ${blogPages.length}`);
    console.log(`📁 Saved to: ${sitemapPath}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };
