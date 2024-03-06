import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      console.log('isLoggedIn', isLoggedIn);
      const onDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (onDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      console.log("Return from here");
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
