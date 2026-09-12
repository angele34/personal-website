import Link from 'next/link';
import React from 'react';

const techLinks = [
  { name: 'NextJS', href: 'https://nextjs.org/' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { name: 'Framer', href: 'https://www.framer.com/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2d2d2de9]">
      <div className="flex justify-center px-4 py-8 sm:px-6 sm:py-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <p className="font-inter tracking-wider text-content text-h1-s">
          <span className="text-green-light">
            © 2026 Angel Arwen E. Reyes.
          </span>{' '}
          All rights reserved. This site is built with{' '}
          <Link
            href="https://nextjs.org/"
            className="transition hover:text-green-light hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </Link>{' '}
          and{' '}
          <Link
            href="https://tailwindcss.com/"
            className="transition hover:text-green-light hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </Link>
          , designed on{' '}
          <Link
            href="https://www.framer.com/"
            className="transition hover:text-green-light hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}