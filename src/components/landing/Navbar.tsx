'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Research', href: '#research' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' }
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUiStore();

  const isAuthPage = pathname?.includes('/login') || pathname?.includes('/register') || pathname?.includes('/dashboard');

  if (isAuthPage) return null;

  return (
    <header className="sticky top-0 left-0 w-full z-50 border-b border-[#4A6572]/35 bg-[#0B2B26]/90 backdrop-blur-md transition-all duration-300 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        
        {/* Official Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none min-h-[44px] min-w-[44px]" aria-label="UniProtXplore Homepage">
          <div className="relative w-9 h-9 overflow-hidden rounded-xl border border-[#4FD1C5]/40 shadow-md shadow-[#4FD1C5]/20 bg-[#0F3A33] shrink-0 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="UniProtXplore Official Logo"
              width={36}
              height={36}
              className="object-cover w-full h-full filter drop-shadow-[0_0_6px_rgba(79,209,197,0.6)]"
              priority
            />
          </div>
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#E3E9E8]">
            UniProtXplore
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#E3E9E8]/80 hover:text-[#4FD1C5] transition-colors focus:outline-none focus:text-[#4FD1C5] min-h-[44px] inline-flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Auth Action buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-[#E3E9E8] px-5 py-2 hover:bg-[#0F3A33] border border-[#4A6572]/40 rounded-full transition-all duration-200 focus:outline-none focus:border-[#4FD1C5] min-h-[44px] inline-flex items-center justify-center"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-sm font-bold text-[#0B2B26] bg-[#4FD1C5] hover:bg-[#4FD1C5]/90 px-5 py-2 rounded-full transition-all duration-200 shadow-md shadow-[#4FD1C5]/20 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[44px] inline-flex items-center justify-center"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#E3E9E8] p-2 rounded-lg hover:bg-[#0F3A33] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-[#0B2B26] border-b border-[#4A6572]/35 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#E3E9E8] hover:text-[#4FD1C5] py-2 border-b border-[#4A6572]/20 min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold text-[#E3E9E8] py-3 border border-[#4A6572]/40 rounded-full bg-[#0F3A33] min-h-[44px] flex items-center justify-center"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-bold text-[#0B2B26] bg-[#4FD1C5] py-3 rounded-full shadow-md shadow-[#4FD1C5]/20 min-h-[44px] flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
