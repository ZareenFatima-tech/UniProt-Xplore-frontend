// Mock authentication helper to support full frontend verification without active database endpoints.
export const authOptions = {
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      }
    }
  ],
  session: { strategy: 'jwt' as const }
};

export const signIn = async (provider: string, data?: any) => {
  console.log(`[NextAuth mock] User signed in via ${provider}`, data);
  // Set mock token in cookies to pass middleware check
  if (typeof window !== 'undefined') {
    document.cookie = 'next-auth.session-token=mock-token; path=/';
  }
  return { success: true };
};

export const signOut = async () => {
  console.log(`[NextAuth mock] User signed out`);
  if (typeof window !== 'undefined') {
    document.cookie = 'next-auth.session-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
};

export const auth = async () => {
  return null; // Return unauthenticated session fallback
};
