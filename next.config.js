/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'www.w3.org',
      'cdn.freebiesupply.com',
      'www.freepnglogos.com',
      'd33wubrfki0l68.cloudfront.net',
      'firebase.google.com',
      'cdn.freebiesupply.com',
      'sass-lang.com',
      'cdn.pixabay.com',
      'a0.awsstatic.com',
      'www.gstatic.com',
      'webpack.js.org',
      'www.mysql.com',
      'cdn.auth0.com',
      'nodejs.org',
      'gw.alipayobjects.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
};

module.exports = {
  ...withAntdLess({
    modifyVars: { '@primary-color': '#DEA81C', '@text-color': '#FAF8FA' },
    lessVarsFilePath: './src/styles/variables.less',
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {},
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      });
      return config;
    },
  }),
  ...nextConfig,
};

