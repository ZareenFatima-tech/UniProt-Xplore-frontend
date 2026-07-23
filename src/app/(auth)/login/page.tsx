'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { loginSchema, LoginInput } from '../../../lib/validators/loginSchema';
import { signIn } from '../../../lib/auth';
import Input from '../../../components/ui/Input';
import Checkbox from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import GlassCard from '../../../components/ui/GlassCard';

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      await signIn('credentials', data);
      router.push('/dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleLogin = async () => {
    await signIn('google');
    router.push('/profile-setup?name=Researcher&inst=EMBL&field=Bioinformatics');
  };

  return (
    <main className="min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex flex-col items-center justify-center p-4 sm:p-6 py-12">
      
      {/* Brand logo link */}
      <Link href="/" className="flex items-center gap-3 mb-8 focus:outline-none" aria-label="UniProtXplore Homepage">
        <div className="relative w-9 h-9 overflow-hidden rounded-xl border border-[#4FD1C5]/40 shadow-md shadow-[#4FD1C5]/20 bg-[#0F3A33] shrink-0 flex items-center justify-center">
          <Image
            src="/logo.jpg"
            alt="UniProtXplore Logo"
            width={36}
            height={36}
            className="object-cover w-full h-full filter drop-shadow-[0_0_6px_rgba(79,209,197,0.6)]"
            priority
          />
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight text-[#E3E9E8]">
          UniProtXplore
        </span>
      </Link>

      <div className="w-full max-w-md">
        <GlassCard className="flex flex-col gap-6" glowColor="none">
          <div className="flex flex-col gap-1.5 text-center">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#E3E9E8]">Welcome Back</h2>
            <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed">Continue your protein research workspace.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="name@institution.edu"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="flex items-center justify-between mt-1">
              <Checkbox
                id="rememberMe"
                label="Remember Me"
                {...register('rememberMe')}
              />
              <Link href="/forgot-password" className="text-xs font-semibold text-[#4FD1C5] hover:underline min-h-[44px] flex items-center">
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2 w-full text-center">
              {isSubmitting ? 'Signing In...' : 'Sign In'}
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

          <Button variant="secondary" onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            Continue with Google
          </Button>

          <p className="text-xs text-[#E3E9E8]/80 text-center font-sans">
            New to UniProtXplore?{' '}
            <Link href="/register" className="font-semibold text-[#4FD1C5] hover:underline">
              Get Started
            </Link>
          </p>
        </GlassCard>
      </div>

    </main>
  );
}
