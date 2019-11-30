import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from 'app/auth/store/actions';

function Logout(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.logoutUser());
  }, [dispatch]);

  return null;
}

export default Logout;
