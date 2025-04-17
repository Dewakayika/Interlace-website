'use client';
import { ArrowRight } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  const { id, Tittle, Descriptions, author, Image: BlogImage, documentId, createdAt } = blog;

  return (
    <Link href={`/blog/${documentId}`} className="block">
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Blog Image */}
        {BlogImage && BlogImage.length > 0 && (
          <div className="relative w-full h-48">
            <Image
              src={`http://127.0.0.1:1337${BlogImage[0]?.formats?.medium?.url}`}
              alt={BlogImage[0]?.name || 'Blog Image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Date */}
          <p className="text-sm text-gray-500 mb-2">{new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          {/* Blog Title */}
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">{Tittle}</h2>

          {Descriptions && Descriptions.length > 0 && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {Descriptions[0]?.children[0]?.text || 'No description available.'}
            </p>
          )}

          {/* Read More Button */}
          <div className='mt-auto flex justify-between items-center'>
            <a href={`/blog/${documentId}`} className="text-sm font-medium text-primary-500 hover:underline flex items-center gap-2">
              Read More {' '} <ArrowRight size="14" />
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}