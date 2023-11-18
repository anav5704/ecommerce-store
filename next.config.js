/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images : {
        domains: [
            "res.cloudinary.com"
        ],    
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'res.cloudinary.com',
        //       port: '',
        //       pathname: '/**',
        //     },
        //   ],
      
    }
}

module.exports = nextConfig
