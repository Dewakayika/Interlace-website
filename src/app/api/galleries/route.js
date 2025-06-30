import { NextResponse } from 'next/server';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 24;
    const skip = (page - 1) * limit;

    // Get total count first
    const totalResponse = await client.getEntries({
      content_type: 'gallery',
      limit: 1,
    });
    
    const total = totalResponse.total;

    // Get paginated galleries
    const response = await client.getEntries({
      content_type: 'gallery',
      order: '-fields.createdDate',
      limit: limit,
      skip: skip,
    });

    const galleries = response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      description: item.fields.description || '',
      image: item.fields.images || null,
      createdDate: item.fields.createdDate || '',
      date: item.fields.createdDate ? new Date(item.fields.createdDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '',
    }));

    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      galleries,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: total,
        itemsPerPage: limit,
        hasNextPage,
        hasPrevPage,
      }
    });

  } catch (error) {
    console.error('Error fetching galleries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch galleries' },
      { status: 500 }
    );
  }
} 