import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
    
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },

    ]
     }

     
};

export default nextConfig;


import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
