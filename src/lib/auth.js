import { verifyToken } from "@/lib/token";

/**
 * Verify if the request is from an authenticated admin.
 * @param {Request} request
 * @returns {Promise<object|null>} Decoded token payload if valid admin, otherwise null.
 */
export async function verifyAdmin(request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return null;
    }
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    // Check if token is valid and has valid role
    if (
      decoded &&
      (decoded.role === "ADMIN" || decoded.role === "SUPER_ADMIN")
    ) {
      return decoded;
    }
    return null;
  } catch (error) {
    return null;
  }
}
