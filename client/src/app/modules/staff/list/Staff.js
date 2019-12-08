import React, { useEffect, useRef } from 'react';
import { FusePageCarded } from '@fuse';
import { useDispatch } from 'react-redux';
import withReducer from 'app/store/withReducer';
import StaffList from './StaffList';
import StaffDialog from './StaffDialog';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function StaffApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);

  useEffect(() => {
    dispatch(Actions.getFilters());
    dispatch(Actions.getFolders());
    dispatch(Actions.getLabels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(Actions.getStaffList(props.match.params));
  }, [dispatch, props.match.params]);

  return (
    <React.Fragment>
      <FusePageCarded
        classes={{
          root: 'w-full',
          header: 'items-center min-h-72 h-72 sm:h-136 sm:min-h-136'
        }}
        content={<StaffList />}
        ref={pageLayout}
        innerScroll
      />
      <StaffDialog />
    </React.Fragment>
  );
}

export default withReducer('staffApp', reducer)(StaffApp);
