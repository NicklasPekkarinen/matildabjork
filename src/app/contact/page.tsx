import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/server/Footer';

export const metadata: Metadata = {
  title: 'Matilda Björk - Kontakt',
};

export default function Contact() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Content */}
        <div className="max-w-6xl mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="text-custom-blue">
              <h1 className="text-xl lg:text-2xl mb-2">Kontakt</h1>
              <div className="text-sm space-y-6">
                <p>
                  För frågor om konst eller beställning av tavlor, kontakta mig
                  via:
                </p>
                <p>
                  Email:
                  <a
                    href="mailto:matilda@konstbybjork.se"
                    className="hover:opacity-80 transition-opacity"
                  >
                    matilda@konstbybjork.se
                  </a>
                </p>
                <p>
                  Instagram:
                  <a
                    href="https://www.instagram.com/konstbybjork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    @konstbybjork
                  </a>
                </p>
              </div>
            </div>

            {/* Additional Info */}

            <div className="text-sm space-y-6 text-custom-blue mt-10">
              <p>
                Följ gärna mitt konstnärskap på Instagram där jag regelbundet
                delar med mig av nya verk och utställningar.
              </p>
              <p>Jag tar även emot beställningar av personliga motiv.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
