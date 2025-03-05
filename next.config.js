/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 's2.loli.net'
    }]
  },
  // 添加 Netlify 部署所需的输出配置
  output: 'standalone',
};

module.exports = nextConfig; 