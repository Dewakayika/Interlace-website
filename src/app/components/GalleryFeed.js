"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function GalleryFeed({ galleries }) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const selected = selectedIdx !== null ? galleries[selectedIdx] : null;
  const touchStartX = useRef(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 2,
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setSelectedIdx((idx) => (idx + 1) % galleries.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((idx) => (idx - 1 + galleries.length) % galleries.length);
      } else if (e.key === "Escape") {
        setSelectedIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, galleries.length]);

  // Touch swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) {
      setSelectedIdx((selectedIdx - 1 + galleries.length) % galleries.length);
    } else if (diff < -50) {
      setSelectedIdx((selectedIdx + 1) % galleries.length);
    }
    touchStartX.current = null;
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleries.map((gallery, idx) => (
          <button
            key={gallery.id}
            className="w-full mb-3 bg-transparent p-0 border-none focus:outline-none hover:opacity-90 transition duration-200 hover:scale-105"
            onClick={() => setSelectedIdx(idx)}
            aria-label={gallery.title}
            style={{ display: "block" }}
          >
            {gallery.image?.fields?.file?.url && (
              <div
                className="relative w-full"
                style={{
                  aspectRatio: `${gallery.image.fields.file.details.image.width} / ${gallery.image.fields.file.details.image.height}`,
                }}
              >
                <Image
                  src={
                    gallery.image.fields.file.url.startsWith("http")
                      ? gallery.image.fields.file.url
                      : `https:${gallery.image.fields.file.url}`
                  }
                  alt={gallery.title}
                  fill
                  className="object-cover rounded-lg hover:opacity-80 transition duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            )}
          </button>
        ))}
      </Masonry>

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
                  setSelectedIdx((selectedIdx - 1 + galleries.length) % galleries.length)
                }
                aria-label="Previous"
                style={{ fontSize: 24 }}
              >
                &#8592;
              </button>
              <button
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 md:w-10 md:h-10"
                onClick={() => setSelectedIdx((selectedIdx + 1) % galleries.length)}
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
        .my-masonry-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        .my-masonry-grid_column > button {
          margin-bottom: 16px;
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
