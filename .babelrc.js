module.exports = {
  presets: [require.resolve('next/babel')],
  plugins: [
    [require.resolve('babel-plugin-import'), { libraryName: 'antd', style: true }],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
};
