import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Additional custom logic can be added here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Allow if user is signed in
        return !!token;
      },
    },
  }
);

// Protect all dashboard and onboarding routes
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/onboarding/:path*",
  ],
};
