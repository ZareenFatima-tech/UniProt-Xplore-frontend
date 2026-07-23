'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';
import Button from '../../../components/ui/Button';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [percent, setPercent] = useState<number>(0);

  const email = searchParams?.get('email') || 'researcher@institution.edu';
  const name = searchParams?.get('name') || '';
  const inst = searchParams?.get('inst') || '';
  const field = searchParams?.get('field') || '';

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleManualRedirect = () => {
    router.push(`/profile-setup?name=${encodeURIComponent(name)}&inst=${encodeURIComponent(inst)}&field=${encodeURIComponent(field)}`);
  };

  return (
    <main className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex flex-col items-center justify-center p-4 sm:p-6">
      
      <div className="w-full max-w-md">
        <GlassCard className="flex flex-col items-center gap-6 text-center" glowColor="none">
          
          <div className="w-12 h-12 rounded-full bg-[#4FD1C5]/10 flex items-center justify-center text-[#4FD1C5] border border-[#4FD1C5]/30">
            <Mail size={22} />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-display font-bold text-[#E3E9E8]">Verify Your Email Address</h2>
            <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed font-sans">
              We sent a verification code to <span className="text-[#4FD1C5] font-semibold font-mono">{email}</span>.
            </p>
          </div>

          <div className="w-full flex flex-col gap-2 mt-2">
            <span className="text-[10px] font-mono uppercase text-[#E3E9E8]/70">
              Verifying credentials link... {percent}%
            </span>
            <div className="w-full h-1.5 bg-[#0B2B26] rounded-full overflow-hidden border border-[#4A6572]/30">
              <div className="h-full bg-[#4FD1C5] transition-all duration-300" style={{ width: `${percent}%` }} />
            </div>
          </div>

          <Button
            variant="primary"
            onClick={handleManualRedirect}
            disabled={percent < 100}
            className="w-full min-h-[44px]"
          >
            {percent < 100 ? 'Awaiting verification...' : 'Proceed to Profile Setup'}
          </Button>

        </GlassCard>
      </div>

    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex items-center justify-center font-mono text-xs uppercase text-[#E3E9E8]/70">
        Verifying account...
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}
