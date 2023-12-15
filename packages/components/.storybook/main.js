/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path')
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/**/*.stories.mdx", 
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    }),
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../'),
    })
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   loader: require.resolve('babel-loader'),
    //   options: {
    //     presets: [
    //       [
    //         'react-app',
    //         {
    //           flow: false,
    //           typescript: true,
    //         },
    //       ],
    //     ],
    //   },
    // })
    // config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
};
export default config;
