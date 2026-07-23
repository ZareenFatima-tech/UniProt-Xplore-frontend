'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { signOut } from '../../lib/auth';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split(';');
      const hasToken = cookies.some((item) => item.trim().startsWith('next-auth.session-token='));
      
      if (!hasToken) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex items-center justify-center">
        <span className="text-xs font-mono uppercase tracking-wider text-[#4FD1C5] animate-pulse">
          Authenticating research workspace...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex flex-col font-sans">
      {/* Dashboard Top bar navigation */}
      <header className="border-b border-[#4A6572]/35 bg-[#0F3A33] h-16 flex items-center justify-between px-4 sm:px-6 z-30 pt-[max(0.25rem,env(safe-area-inset-top))]">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-3 min-h-[44px]" aria-label="UniProtXplore Workspace Home">
            <div className="relative w-8 h-8 overflow-hidden rounded-xl border border-[#4FD1C5]/40 shadow-md shadow-[#4FD1C5]/20 bg-[#0B2B26] shrink-0 flex items-center justify-center">
              <Image
                src="/logo.jpg"
                alt="UniProtXplore Logo"
                width={32}
                height={32}
                className="object-cover w-full h-full filter drop-shadow-[0_0_6px_rgba(79,209,197,0.5)]"
                priority
              />
            </div>
            <span className="font-display font-extrabold text-base tracking-tight text-[#E3E9E8]">
              UniProtXplore Workspace
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-xs font-semibold text-[#E3E9E8]/80 hover:text-[#F87171] hover:bg-[#0B2B26] px-3.5 py-2 rounded-full border border-[#4A6572]/30 transition-all duration-200 focus:outline-none min-h-[44px]"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main content body */}
      <div className="flex-1 flex flex-col w-full pb-[max(2rem,env(safe-area-inset-bottom))]">
        {children}
      </div>
    </div>
  );
}
