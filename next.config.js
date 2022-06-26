/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'ru', 'uk', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  images: {
    domains: [
      'lwi-dev-bucket.s3.eu-central-1.amazonaws.com',
      'lwi-staging-bucket.s3.eu-central-1.amazonaws.com',
      'lwi-prod-bucket.s3.eu-central-1.amazonaws.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=10000, must-revalidate=18000',
          },
        ],
      },
    ];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development',
    // debug: false,
  },
});
