/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        sassOptions: {
            includePaths: [path.join(__dirname, 'public/assets/sass')],
          },
      },
    transpilePackages: ['@storefront-ui/react'],
}

module.exports = nextConfig
