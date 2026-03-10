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
    // Block /privacy_policy on main site (LinkShift-only page)
    if (pathname === '/privacy_policy') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // === SUBDOMAIN DETECTED ===
  const isLinkShift = subdomain.toLowerCase() === 'linkshift';

  // LinkShift subdomain: allow / and /privacy_policy only
  if (isLinkShift) {
    if (pathname === '/' || pathname === '/privacy_policy') {
      return NextResponse.next();
    }
    const redirectUrl = new URL('/', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Other subdomains (e.g. resume): only allow root path
  if (pathname !== '/') {
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
