//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages if deploying to a subdirectory (e.g. /repo-name)
  // Set basePath for GitHub Pages
  // Check for CI environment (GitHub Actions)
  basePath: process.env.CI ? '/ostapenko-design' : '',
  assetPrefix: process.env.CI ? '/ostapenko-design' : '',

  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
