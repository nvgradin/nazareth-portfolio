import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + Framer Motion
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // CSS Modules + inline styles from Framer Motion
      "style-src 'self' 'unsafe-inline'",
      // Self-hosted images + data URIs (noise SVG)
      "img-src 'self' data: blob:",
      // next/font/google serves fonts from self in prod; keep fonts.gstatic as fallback for dev
      "font-src 'self' https://fonts.gstatic.com",
      // Spotify embed iframe
      "frame-src https://open.spotify.com",
      // Spotify embed JS/assets
      "connect-src 'self' https://open.spotify.com",
      "media-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
