/**
 * An array of routes that are accessible to public.
 * These routes donot require authentication.
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication like login and registration.
 *
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * This is the route that we will redirect after successfull login
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
export const protectedRoutes = ["/settings"]
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";
