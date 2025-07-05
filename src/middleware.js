import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname === '/why-pro') {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/why-pro'
}; 