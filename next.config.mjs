/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

    images: {
    domains: [
      "images.unsplash.com",
      "global-uploads.webflow.com"
    ],
  },
};

export default nextConfig;
