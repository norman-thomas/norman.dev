/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> deploy as plain files to AWS S3 + CloudFront (or Amplify).
  output: "export",
  // The static export has no Next.js image optimization server, so serve images as-is.
  images: { unoptimized: true },
  // Emit /about/index.html style paths, which play nicely with S3/CloudFront.
  trailingSlash: true,
};

export default nextConfig;
