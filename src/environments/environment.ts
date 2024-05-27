// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const enum prefix {
  user = 'users',
}

export const environment = {
  production: false,
  API_URL: 'https://dashboard.lotoda.vn:8443/api',
  api: {
    auth: {
      login: 'login',
      register: 'register',
      forgotPassword: prefix.user + '/forgot_password',
    },
    user: {
      get: prefix.user + '/',
      put: prefix.user + '/'
    },
  },
  cloudinary: {
    cloudName: 'dfib3gi7p',
    uploadPreset: 'pnv0uopa_lotoda',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
