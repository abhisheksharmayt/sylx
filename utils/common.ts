const DOMAIN_NAME = process.env.NEXT_DOMAIN_NAME;

/**
 * Get subdomain from host string
 * @param host - Optional host string. If not provided, uses window.location.hostname (client-side only)
 * @returns subdomain string or null if no subdomain
 */
export const getSubdomain = (host?: string): string | null => {
    // Use provided host or fallback to window.location.hostname (client-side)
    const hostname = host ?? (typeof window !== 'undefined' ? window.location.hostname : null);
    
    if (!hostname) return null;
    
    const hostParts = hostname.split(".");

    // localhost:3000 or similar - no subdomain
    if (hostParts.length < 2) {
        return null;
    }

    // Handle subdomain.localhost for local development
    if (hostParts.length === 2 && hostParts[1].startsWith('localhost')) {
        return hostParts[0];
    }

    // Main domain (domain.com) - no subdomain
    if (hostParts.length === 2) {
        return null;
    }

    // Handle www subdomain
    if (hostParts.includes("www")) {
        const subdomain = hostParts[1];
        return subdomain !== "localhost" && subdomain !== DOMAIN_NAME ? subdomain : null;
    }

    // subdomain.domain.com
    const subdomain = hostParts[0];
    return subdomain !== "localhost" && subdomain !== DOMAIN_NAME ? subdomain : null;
}