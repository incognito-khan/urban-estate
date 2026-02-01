import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Define protected routes
  const isProtectedAdminRoute =
    path.startsWith("/admin") && path !== "/admin/login";
  const isProtectedApiRoute =
    path.startsWith("/api/v1/property") &&
    ["POST", "PATCH", "DELETE"].includes(request.method);

  if (isProtectedAdminRoute || isProtectedApiRoute) {
    // Get token from cookies or authorization header
    // Ideally, for API routes we check header, for pages we check cookies
    // For this simple implementation, let's look for a cookie named 'token' which we should store on login
    // OR we can check for Authorization header "Bearer <token>"

    // NOTE: In a real Next.js app with this structure, the token is likely stored in a cookie for page access
    const token = request.cookies.get("token")?.value;

    if (!token) {
      if (isProtectedAdminRoute) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      } else {
        return NextResponse.json(
          { error: "Unauthorized: Missing token", success: false },
          { status: 401 },
        );
      }
    }

    // Since we can't easily verify the JWT signature in Edge Runtime with the 'jsonwebtoken' library
    // (it relies on Node.js crypto), we might need `jose` library or proper edge-compatible JWT library.
    // However, for this simplified "production-ready" task without adding new dependencies if possible:
    // We will do a basic check here or skip deep verification in middleware if dependencies are an issue,
    // relying on the API route to verify strictly.
    // BUT the prompt asked for clear errors and auth in admin only APIs.

    // Let's assume for now we just check existence in middleware for simple redirect,
    // and let the API route do the heavy lifting of verification to avoid Edge runtime issues with 'jsonwebtoken'.

    // If strict middleware verification is needed, we'd use 'jose'.
    // checking if jose is installed... package.json didn't show it.
    // 'jsonwebtoken' works in Node runtime (API routes) but often fails in Edge Middleware.

    // Strategy:
    // 1. For Page Routes (/admin): Check for token cookie. If missing, redirect.
    // 2. For API Routes: The API route handler itself will verify using 'jsonwebtoken' which is safe there.

    // So this middleware primarily handles redirection for UI.

    if (isProtectedAdminRoute && !token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/v1/property"],
};
