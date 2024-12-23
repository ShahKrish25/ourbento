/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.fineartamerica.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'thumbs.dreamstime.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'th.bing.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.jaredsdetours.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                pathname: '/**',
            },
            // Add more patterns as needed
        ],
    },
};

export default nextConfig;
