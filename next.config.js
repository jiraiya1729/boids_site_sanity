/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
    images: {
      domains: ['cdn.sanity.io'],
    },
    plugins:{
      tailwindcss: {},
      autoprefixer: {},
    }
  };
  
