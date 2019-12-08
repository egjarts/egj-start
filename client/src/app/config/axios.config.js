import axios from 'axios';
import store from 'app/store';

axios.interceptors.request.use(function(config) {
  // todo: just get this fro firebase, since it will
  // automatically refresh if needed
  try {
    const login = store.getState().auth.login;
    const token = login.success ? store.getState().auth.login.token : null;
    if (!token) throw 'No authentication token';
    config.headers['X-Auth-Token'] = token;
  } catch (error) {
    delete config.headers['X-Auth-Token'];
  }

  return config;
});
