'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerSchema, RegisterInput } from '../../../lib/validators/registerSchema';
import { signIn } from '../../../lib/auth';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Checkbox from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import GlassCard from '../../../components/ui/GlassCard';

const fieldOptions = [
  { value: '', label: 'Select Field (Optional)' },
  { value: 'Bioinformatics', label: 'Bioinformatics' },
  { value: 'Molecular Biology', label: 'Molecular Biology' },
  { value: 'Computational Biology', label: 'Computational Biology' },
  { value: 'Structural Biology', label: 'Structural Biology' },
  { value: 'Drug Discovery', label: 'Drug Discovery' },
  { value: 'Biotechnology', label: 'Biotechnology' },
  { value: 'Other', label: 'Other' }
];

export default function RegisterPage() {
  const router = useRouter();
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      institution: '',
      researchField: '',
      agreeTerms: false
    }
  });

  const watchPassword = watch('password', '');

  React.useEffect(() => {
    let score = 0;
    if (watchPassword.length >= 8) score++;
    if (/[A-Z]/.test(watchPassword)) score++;
    if (/[0-9]/.test(watchPassword)) score++;
    setPasswordStrength(score);
  }, [watchPassword]);

  const onSubmit = async (data: RegisterInput) => {
    try {
      // Record user signup history in Supabase
      await fetch('/api/auth/record-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          institution: data.institution,
          researchField: data.researchField,
          authProvider: 'credentials'
        })
      });

      router.push(`/verify-email?email=${encodeURIComponent(data.email)}&name=${encodeURIComponent(data.name)}&inst=${encodeURIComponent(data.institution || '')}&field=${encodeURIComponent(data.researchField || '')}`);
    } catch (e) {
      console.error('Signup error:', e);
    }
  };

  const handleGoogleRegister = async () => {
    await fetch('/api/auth/record-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Google User',
        email: `google_user_${Date.now()}@research.org`,
        institution: 'EMBL / International Lab',
        researchField: 'Bioinformatics',
        authProvider: 'google'
      })
    });
    await signIn('google');
    router.push('/profile-setup?name=Researcher&inst=EMBL&field=Bioinformatics');
  };

  return (
    <main className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex flex-col items-center justify-center p-4 sm:p-6 py-12">
      
      <Link href="/" className="flex items-center gap-2.5 mb-8 focus:outline-none" aria-label="UniProtXplore Homepage">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter drop-shadow-[0_0_6px_rgba(79,209,197,0.5)]">
          <path d="M4.5 16.5c-1.5 1.26-2.5 3-2.5 5h20c0-2-1-3.74-2.5-5M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8z"/>
          <circle cx="12" cy="10" r="1.5" fill="#4FD1C5" />
        </svg>
        <span className="font-display font-extrabold text-xl tracking-tight text-[#E3E9E8]">
          UniProtXplore
        </span>
      </Link>

      <div className="w-full max-w-md">
        <GlassCard className="flex flex-col gap-6" glowColor="none">
          
          <div className="flex flex-col gap-1.5 text-center">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#E3E9E8]">Create Your Research Account</h2>
            <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed">Join researchers exploring proteins through autonomous intelligence.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input
              id="name"
              label="Full Name"
              type="text"
              placeholder="Dr. Evelyn Carter"
              error={errors.name?.message}
              {...register('name')}
            />

            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="e.carter@institution.edu"
              error={errors.email?.message}
              {...register('email')}
            />

            <div className="flex flex-col gap-1">
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Min. 8 chars, 1 uppercase, 1 digit"
                error={errors.password?.message}
                {...register('password')}
              />
              
              {watchPassword && (
                <div className="flex gap-1.5 mt-2 h-1 w-full bg-[#0B2B26] rounded-full overflow-hidden border border-[#4A6572]/30">
                  <div className={`h-full transition-all duration-300 ${
                    passwordStrength === 1 ? 'w-1/3 bg-[#F87171]' :
                    passwordStrength === 2 ? 'w-2/3 bg-yellow-500' :
                    passwordStrength === 3 ? 'w-full bg-[#4FD1C5]' : 'w-0'
                  }`} />
                </div>
              )}
            </div>

            <Input
              id="institution"
              label="Institution / Organization (Optional)"
              type="text"
              placeholder="European Molecular Biology Lab"
              error={errors.institution?.message}
              {...register('institution')}
            />

            <Select
              id="researchField"
              label="Research Field (Optional)"
              options={fieldOptions}
              error={errors.researchField?.message}
              {...register('researchField')}
            />

            <Checkbox
              id="agreeTerms"
              label="I agree to the Terms of Service & Privacy Policy"
              error={errors.agreeTerms?.message}
              {...register('agreeTerms')}
            />

            <Button type="submit" disabled={isSubmitting} className="mt-2 w-full text-center">
              {isSubmitting ? 'Creating Account...' : 'Register Account'}
            </Button>
          </form>

          <div className="relative flex items-center justify-center my-1">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#4A6572]/35" />
            </div>
            <span className="relative px-3 text-[10px] font-mono uppercase bg-[#0F3A33] text-[#E3E9E8]/70 border border-[#4A6572]/30 rounded-full">
              Or
            </span>
          </div>

          <Button variant="secondary" onClick={handleGoogleRegister} className="w-full flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            Continue with Google
          </Button>

          <p className="text-xs text-[#E3E9E8]/80 text-center font-sans">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-[#4FD1C5] hover:underline">
              Sign In
            </Link>
          </p>

        </GlassCard>
      </div>

    </main>
  );
}
