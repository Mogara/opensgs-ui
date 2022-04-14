const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const commonConfig = {
    reactStrictMode: true,
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...commonConfig,
      rewrites: async () => {
        return [
          {
            source: '/:path*',
            destination: process.env.SERVER_HOST + '/:path*',
          },
        ];
      },
    };
  }

  return commonConfig;
};
