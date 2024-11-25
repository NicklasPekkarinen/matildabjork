'use client';

import styles from './gallery.module.css';
import ImageModal from '@/components/client/ImageModal';
import Footer from '@/components/server/Footer';
//import { GalleryImage } from '@/types/gallery';
import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  size: string;
  year: string;
  price?: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/image1.jpg',
    alt: 'Akvarell 1',
    title: 'I närheten av Fröå gruva',
    size: '38x56 cm',
    year: '2024',
  },
  {
    src: '/gallery/image2.jpg',
    alt: 'Akvarell 2',
    title: 'By i vinterlandskap',
    size: '28x38 cm',
    year: '2024',
  },
  {
    src: '/gallery/image3.jpg',
    alt: 'Akvarell 3',
    title: 'Solnedgång i skog kl 14:23',
    size: '28x38 cm',
    year: '2024',
  },
  {
    src: '/gallery/image4.jpg',
    alt: 'Akvarell 4',
    title: 'Kalhygget-sen augistikväll efter regn',
    size: '28x38 cm',
    year: '2023',
  },
  {
    src: '/gallery/image5.jpg',
    alt: 'Akvarell 5',
    title: 'Sommarfjäll',
    size: '30x40 cm',
    year: '2023',
  },
  {
    src: '/gallery/image6.jpg',
    alt: 'Akvarell 6',
    title: 'Vinter vid Långbuan',
    size: '38x56 cm',
    year: '2024',
  },
  {
    src: '/gallery/image7.jpg',
    alt: 'Akvarell 7',
    title: 'Gamla torget',
    size: '14x19 cm',
    year: '2024',
  },
  {
    src: '/gallery/image8.jpg',
    alt: 'Akvarell 8',
    title: 'Tunn is på liten skogssjö',
    size: '38x56 cm',
    year: '2024',
  },
  {
    src: '/gallery/image9.jpg',
    alt: 'Akvarell 9',
    title: 'Höstfjäll',
    size: '50x70 cm',
    year: '2024',
  },
];

export default function Galleri() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="relative min-h-screen">
      <div className="space-y-6 mb-24">
        {/* Gallery Heading */}
        <div className="container mx-auto max-w-[900px] px-4">
          <h1 className="text-xl lg:text-2xl text-custom-blue mb-2">Galleri</h1>
          <div className="text-sm text-custom-blue space-y-6">
            <p>
              Här presenteras ett urval av mina akvareller. Vid intresse av att
              köpa en målning, kontakta mig via mail eller instagram. Scrolla åt
              höger för att utforska hela galleriet.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Image Row */}
        <div className="relative">
          <div className={`overflow-x-auto ${styles['scrollbar-hide']}`}>
            <div
              className={`flex gap-2 pb-4 snap-x snap-mandatory flex-col md:flex-row`}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-none snap-start cursor-pointer w-100 md:w-100 mb-8 md:mb-0"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Image Information */}
                  <div className="mt-3 text-custom-blue px-2 text-sm">
                    <h2 className="text-sm mb-1 italic">{image.title}</h2>
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
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
