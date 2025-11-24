const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudflareimages.com"
      },
      {
        protocol: "https",
        hostname: "*.cloudflareusercontent.com"
      },
      {
        protocol: "https",
        hostname: "*.wfslnet.workers.dev"
      }
    ]
  }
};

module.exports = nextConfig;
