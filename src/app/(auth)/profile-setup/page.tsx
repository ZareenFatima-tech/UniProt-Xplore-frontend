'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Brain } from 'lucide-react';
import { signIn } from '../../../lib/auth';
import GlassCard from '../../../components/ui/GlassCard';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const setupSchema = z.object({
  institution: z.string().min(2, { message: 'Institution must be at least 2 characters.' }),
  researchField: z.string().min(2, { message: 'Please select a research field.' })
});

type SetupInput = z.infer<typeof setupSchema>;

const fields = [
  { value: 'Bioinformatics', label: 'Bioinformatics' },
  { value: 'Molecular Biology', label: 'Molecular Biology' },
  { value: 'Computational Biology', label: 'Computational Biology' },
  { value: 'Structural Biology', label: 'Structural Biology' },
  { value: 'Drug Discovery', label: 'Drug Discovery' },
  { value: 'Biotechnology', label: 'Biotechnology' },
  { value: 'Other', label: 'Other' }
];

function ProfileSetupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams?.get('name') || '';
  const initialInst = searchParams?.get('inst') || '';
  const initialField = searchParams?.get('field') || '';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SetupInput>({
    resolver: zodResolver(setupSchema),
    defaultValues: {
      institution: initialInst,
      researchField: initialField
    }
  });

  const completeSetup = async (data?: SetupInput) => {
    try {
      // Record complete profile in Supabase
      await fetch('/api/auth/record-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Researcher',
          email: searchParams?.get('email') || `researcher_${Date.now()}@institution.edu`,
          institution: data?.institution || initialInst || 'EMBL',
          researchField: data?.researchField || initialField || 'Bioinformatics',
          authProvider: 'google'
        })
      });
    } catch (e) {
      console.error('Supabase profile log notice:', e);
    }

    // Write session cookie to bypass middleware protection
    await signIn('credentials', { mock: true });
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex flex-col items-center justify-center p-4 sm:p-6 py-12">
      
      <div className="w-full max-w-md">
        <GlassCard className="flex flex-col gap-6" glowColor="none">
          
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#4FD1C5]/10 flex items-center justify-center text-[#4FD1C5] border border-[#4FD1C5]/30">
              <Brain size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#E3E9E8]">Research Profile Setup</h2>
              <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed font-sans">
                Welcome, <span className="text-[#4FD1C5] font-semibold">{name || 'Scientist'}</span>. Configure your research profile workspace.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(completeSetup)} className="flex flex-col gap-4">
            
            <Input
              id="institution"
              label="Institution / Organization"
              type="text"
              placeholder="e.g. EMBL or Harvard Biotech"
              error={errors.institution?.message}
              {...register('institution')}
            />

            <Select
              id="researchField"
              label="Research Field"
              options={fields}
              error={errors.researchField?.message}
              {...register('researchField')}
            />

            <div className="flex flex-col gap-3 mt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full text-center min-h-[44px]">
                {isSubmitting ? 'Saving...' : 'Save and Continue'}
              </Button>
              <button
                type="button"
                onClick={() => completeSetup()}
                className="text-xs text-[#E3E9E8]/60 hover:text-[#4FD1C5] transition-colors py-2 min-h-[44px] flex items-center justify-center"
              >
                Skip for now
              </button>
            </div>

          </form>

        </GlassCard>
      </div>

    </main>
  );
}

export default function ProfileSetupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex items-center justify-center font-mono text-xs uppercase text-[#E3E9E8]/70">
        Loading profile configuration...
      </div>
    }>
      <ProfileSetupContent />
    </Suspense>
  );
}
