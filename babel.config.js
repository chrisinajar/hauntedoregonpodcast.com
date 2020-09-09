module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    ['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
  presets: ['next/babel', '@babel/preset-env'],
};
