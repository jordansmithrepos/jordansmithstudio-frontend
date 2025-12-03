module.exports = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'oz3qzx64',
    NEXT_PUBLIC_SANITY_DATASET: 'production',
  },
  reactStrictMode: false,
  // images: {
  //   domains: ['cdn.sanity.io'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  }
};
