import { useEffect } from 'react';
import { GalleryImage } from '@/types/gallery';

interface ImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          onClick={onClose}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image container */}
        <div className="relative w-full h-full flex justify-center">
          <div className="relative h-full" style={{ width: 'fit-content' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain h-full"
            />
            
            {/* Image information overlay */}
            <div className="absolute bottom-0 left-0 p-2.5 bg-white bg-opacity-40 text-custom-blue text-sm font-caslon">
              <h2 className="text-sm mb-1 italic font-caslon">{image.title}</h2>
              <div className="flex items-center space-x-3">
                <span>{image.size}</span>
                <span>·</span>
                <span>{image.year}</span>
                {image.price && (
                  <>
                    <span>·</span>
                    <span>{image.price} kr</span>
                  </>
                )}
              </div>
              {image.description && (
                <p className="mt-1.5">{image.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
