// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSubdomain } from '@/utils/common';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  if (!host) return NextResponse.next();

  const subdomain = getSubdomain(host);
  const pathname = req.nextUrl.pathname;

  // Allow static files and API routes regardless of subdomain
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like favicon.ico, images, etc.
  ) {
    return NextResponse.next();
  }

  // No subdomain - serve main site normally
  if (!subdomain) {
    return NextResponse.next();
  }

  // === SUBDOMAIN DETECTED ===
  // Only allow the root path on subdomains
  // Block all other routes (about, contact, experience, etc.)
  
  if (pathname !== '/') {
    // Redirect any non-root path back to root of the subdomain
    const redirectUrl = new URL('/', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Rewrite root path to /resumeBuilder with username
  // username.domain.com/ → /resumeBuilder?username=username
  const url = req.nextUrl.clone();
  url.pathname = '/resumeBuilder';
  url.searchParams.set('username', subdomain);

  return NextResponse.rewrite(url);
}

// Run middleware on all paths except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
