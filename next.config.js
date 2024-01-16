/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 //*> Internationalization (i18n) configuration to support multiple languages.
 i18n: {
  locales: ['es', 'en'],
  defaultLocale: 'es',
 },
};

module.exports = nextConfig;
