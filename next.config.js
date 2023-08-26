require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'medium.com',
      port: '',
      pathname: '_/stat?event=post.clientViewed&referrerSource=full_rss&postId=4fa3cf1d6ed'

    },
  ],
  images: {
    domains: ['cdn-images-1.medium.com']
  },
}