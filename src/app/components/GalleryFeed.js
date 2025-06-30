"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function GalleryFeed({ galleries }) {
  const [page, setPage] = useState(1);
  const [paginatedGalleries, setPaginatedGalleries] = useState(galleries);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 24,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [selectedIdx, setSelectedIdx] = useState(null);
  const selected = selectedIdx !== null ? paginatedGalleries[selectedIdx] : null;
  const touchStartX = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setSelectedIdx((idx) => (idx + 1) % paginatedGalleries.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((idx) => (idx - 1 + paginatedGalleries.length) % paginatedGalleries.length);
      } else if (e.key === "Escape") {
        setSelectedIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, paginatedGalleries.length]);

  // Touch swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) {
      setSelectedIdx((selectedIdx - 1 + paginatedGalleries.length) % paginatedGalleries.length);
    } else if (diff < -50) {
      setSelectedIdx((selectedIdx + 1) % paginatedGalleries.length);
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/galleries?page=${page}&limit=24`)
      .then(res => res.json())
      .then(data => {
        if (data.galleries) {
          setPaginatedGalleries(data.galleries);
          setPagination(data.pagination);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching galleries:', error);
        setIsLoading(false);
      });
  }, [page]);

  // Reset selected index when page changes
  useEffect(() => {
    setSelectedIdx(null);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, pagination.currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(pagination.totalPages, startPage + maxVisiblePages - 1);

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        );
      }
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            pagination.currentPage === i
              ? 'bg-blue-600 text-white border border-blue-600'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    // Add last page and ellipsis if needed
    if (endPage < pagination.totalPages) {
      if (endPage < pagination.totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={pagination.totalPages}
          onClick={() => handlePageChange(pagination.totalPages)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          {pagination.totalPages}
        </button>
      );
    }

    return pages;
  };

  // Handle image load completion
  const handleImageLoad = () => {
    // Optional: Add any logic when images finish loading
  };

  
  return (
    <>
      {isLoading ? (
        <div className="gallery-loading">
          <div className="loading-spinner"></div>
          <p>Loading gallery...</p>
        </div>
      ) : (
        <>
          <div className="gallery-grid">
            {paginatedGalleries.map((gallery, idx) => (
              <button
                key={gallery.id}
                className="gallery-item bg-transparent p-0 border-none focus:outline-none hover:opacity-90 transition duration-200 hover:scale-105"
                onClick={() => setSelectedIdx(idx)}
                aria-label={gallery.title}
              >
                {gallery.image?.fields?.file?.url && (
                  <div className="gallery-image-container">
                    <Image
                      src={
                        gallery.image.fields.file.url.startsWith("http")
                          ? gallery.image.fields.file.url
                          : `https:${gallery.image.fields.file.url}`
                      }
                      alt={gallery.title}
                      fill
                      className="object-cover rounded-lg hover:opacity-80 transition duration-200"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={idx < 8}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="pagination-container">
              <div className="pagination-info">
                <p className="text-sm text-gray-600">
                  Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to{' '}
                  {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of{' '}
                  {pagination.totalItems} galleries
                </p>
              </div>
              
              <div className="pagination-controls">
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={!pagination.hasPrevPage}
                  className="pagination-button pagination-prev"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <div className="pagination-numbers">
                  {renderPageNumbers()}
                </div>

                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                  className="pagination-button pagination-next"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {selected && (
        <Modal onClose={() => setSelectedIdx(null)}>
          <div
            className="bg-white rounded-lg shadow-lg mx-auto w-full h-full max-w-[100vw] max-h-[100vh] overflow-hidden flex flex-col md:flex-row animate-modal-in modal-mobile-style"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image Viewer */}
            <div className="relative w-full md:w-3/4 h-[40vh] md:h-auto bg-black flex items-center justify-center image-container">
              {selected.image?.fields?.file?.url && (
                <Image
                  key={selected.id}
                  src={
                    selected.image.fields.file.url.startsWith("http")
                      ? selected.image.fields.file.url
                      : `https:${selected.image.fields.file.url}`
                  }
                  alt={selected.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                  priority
                />
              )}

              {/* Arrows */}
              <button
                className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 md:w-10 md:h-10"
                onClick={() =>
                  setSelectedIdx((selectedIdx - 1 + paginatedGalleries.length) % paginatedGalleries.length)
                }
                aria-label="Previous"
                style={{ fontSize: 24 }}
              >
                &#8592;
              </button>
              <button
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 md:w-10 md:h-10"
                onClick={() => setSelectedIdx((selectedIdx + 1) % paginatedGalleries.length)}
                aria-label="Next"
                style={{ fontSize: 24 }}
              >
                &#8594;
              </button>
            </div>

            {/* Caption */}
            <div className="hidden md:flex w-full md:w-1/4 h-full overflow-y-auto p-4 md:p-6 border-t md:border-t-0 md:border-l border-gray-200 flex-col justify-between text-center md:text-left caption-panel">
              <div>
                <h2 className="text-lg font-semibold mb-2">{selected.title}</h2>
                {selected.description && (
                  <p className="text-gray-700 mb-4">{selected.description}</p>
                )}
                {selected.date && (
                  <p className="text-sm text-gray-500">Posted on: {selected.date}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedIdx(null)}
                className="mt-6 text-red-500 hover:underline self-center md:self-start"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      <style jsx global>{`
        .gallery-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          padding: 16px 0;
          min-height: 200px;
        }

        .gallery-item {
          display: block;
          width: 100%;
          min-height: 200px;
        }

        .gallery-image-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          border-radius: 8px;
          overflow: hidden;
          background-color: #f5f5f5;
        }

        @supports not (aspect-ratio: 1 / 1) {
          .gallery-image-container {
            aspect-ratio: auto;
            height: 200px;
          }
        }

        .pagination-container {
          margin-top: 40px;
          padding: 20px 0;
          border-top: 1px solid #e5e7eb;
        }

        .pagination-info {
          text-align: center;
          margin-bottom: 20px;
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pagination-button {
          display: flex;
          align-items: center;
          gap: 4px;
          px: 3;
          py: 2;
          text-sm;
          font-medium;
          text-gray-700;
          bg-white;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          transition: all 0.2s;
          cursor: pointer;
        }

        .pagination-button:hover:not(:disabled) {
          background-color: #f9fafb;
          border-color: #9ca3af;
        }

        .pagination-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-numbers {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-modal-in {
          animation: modal-in 0.35s ease-in-out;
        }

        /* Mobile full-screen gallery */
        @media (max-width: 768px) {
          .modal-mobile-style {
            background-color: black !important;
            border-radius: 0 !important;
          }

          .modal-mobile-style .image-container {
            height: 100vh !important;
            width: 100vw !important;
            background-color: black !important;
          }

          .modal-mobile-style .image-container img {
            object-fit: contain !important;
          }

          .modal-mobile-style .caption-panel {
            display: none !important;
          }

          .pagination-controls {
            gap: 4px;
          }

          .pagination-numbers {
            gap: 2px;
          }
        }

        /* Responsive grid adjustments */
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        @media (min-width: 1025px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}

function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-70 transition-colors duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-[100vw] max-h-[100vh] bg-white overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="absolute top-2 right-2 text-white bg-gray-700 bg-opacity-80 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
          style={{ fontSize: 28 }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
