const enum prefix {
  user = 'users',
}

export const environment = {
  production: true,
  API_URL: 'https://dashboard.lotoda.vn:8443/api',
  api: {
    auth: {
      login: 'login',
      register: 'register',
      forgotPassword: prefix.user + '/forgot_password',
    },
    user: {
      get: prefix.user + '/',
      put: prefix.user + '/',
    },
  },
  cloudinary: {
    cloudName: 'dfib3gi7p',
    uploadPreset: 'pnv0uopa_lotoda',
  },
};
