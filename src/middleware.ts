import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect /dashboard and all sub-routes
  if (pathname.startsWith('/dashboard')) {
    const sessionToken = request.cookies.get('next-auth.session-token');

    if (!sessionToken) {
      // Redirect unauthenticated requests to login page
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
