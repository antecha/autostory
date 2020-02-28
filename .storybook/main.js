module.exports = {
  // stories: ['../stories/**/*.stories.js'],
  stories: ['../src/**/*.stories.js|mdx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
