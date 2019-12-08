import { combineReducers } from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import routes from './routes.reducer';
import quickPanel from 'app/layout/shared-components/quickPanel/store/reducers';

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    fuse,
    routes,
    quickPanel,
    ...asyncReducers
  });

export default createReducer;
