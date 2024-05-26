import { auth } from '@/auth'

const WHITE_LIST = ['/auth/sign-in', '/auth/sign-up']

export default auth((req) => {
  // Redirect to sign-in page if not authenticated
  if (!req.auth && !WHITE_LIST.includes(req.nextUrl.pathname)) {
    const url = new URL('/auth/sign-in', req.nextUrl.origin)
    return Response.redirect(url)
  }

  // Redirect to home page if authenticated
  if (req.auth && WHITE_LIST.includes(req.nextUrl.pathname)) {
    const url = new URL('/', req.nextUrl.origin)
    return Response.redirect(url)
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
