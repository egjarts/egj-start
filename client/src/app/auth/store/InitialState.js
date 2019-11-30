export { user, preferences, login, roles };

const roles = {
  anonymous: 'Anonymous',
  authenticated: 'Authenticated'
};

const user = {
  roles: [roles.anonymous],
  displayName: 'Anonymous',
  email: '',
  emailVerified: false,
  photoURL: '',
  isAnonymous: true,
  uid: '',
  providerData: null,
  preferences: null,
  modules: null
};

const preferences = {
  displayName: 'Anonymous',
  email: '',
  photoURL: '',
  settings: {}
};

const login = {
  token: null,
  success: false,
  error: {
    username: null,
    password: null
  },
  processing: false
};
