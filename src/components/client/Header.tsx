'use client';

import Navbar from '@/components/client/Navbar';

import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isGalleryPage = pathname === '/galleri';

  return (
    <header
      className={`flex justify-between items-center mb-6 ${isGalleryPage ? '' : 'sticky'} z-50`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
