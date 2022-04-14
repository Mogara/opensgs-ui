const host = process.env.NEXT_PUBLIC_SERVER_HOST || '';

const apiEndpoint = '/api';

const healthApi = `${host}${apiEndpoint}/health/v1alpha1`;

const urls = {
  ping: healthApi + '/ping',
};

export default urls;
