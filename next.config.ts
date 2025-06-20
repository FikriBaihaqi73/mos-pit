import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.google.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sib.pondokit.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pondokit.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rumahitindonesia.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
