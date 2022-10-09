/** @type {import('next').NextConfig['rewrites']} */
const rewrites = async () => {
  return [
    {
      source: '/areas/:prefecture--:city',
      destination: '/prefecture/:prefecture/city/:city',
    },
    {
      source: '/areas/:prefecture',
      destination: '/prefecture/:prefecture',
    },
  ]
}

/** @type {import('next').NextConfig['redirects']} */
const redirects = async () => {
  return [
    {
      source: '/prefecture/:prefecture/city/:city',
      destination: '/areas/:prefecture--:city',
      permanent: true,
    },
    {
      source: '/prefecture/:prefecture',
      destination: '/areas/:prefecture',
      permanent: true,
    },
  ]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites,
  redirects,
}

module.exports = nextConfig
