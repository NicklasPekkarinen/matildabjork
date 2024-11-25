import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-1 py-4">
      <div className="mx-auto flex justify-end items-center px-4">
        <div className="text-custom-blue flex items-center space-x-4 text-sm">
          <span> Matilda Björk, Malmö 2024</span>
          <a
            href="https://www.instagram.com/konstbybjork"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={19}
              height={19}
              className="inline-block"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
