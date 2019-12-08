import React, { useEffect, useState } from 'react';
import { List, Typography } from '@material-ui/core';
import { FuseUtils, FuseAnimate, FuseAnimateGroup } from '@fuse';
import { useSelector } from 'react-redux';
import _ from '@lodash';
import StaffListItem from './StaffListItem';

function StaffList(props) {
  const staff = useSelector(({ staffApp }) => staffApp.staff.entities);
  const searchText = useSelector(({ staffApp }) => staffApp.staff.searchText);
  const orderBy = useSelector(({ staffApp }) => staffApp.staff.orderBy);
  const orderDescending = useSelector(
    ({ staffApp }) => staffApp.staff.orderDescending
  );
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function getFilteredArray(entities, searchText) {
      const arr = Object.keys(entities).map(id => entities[id]);
      if (searchText.length === 0) {
        return arr;
      }
      return FuseUtils.filterArrayByString(arr, searchText);
    }

    if (staff) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(staff, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [staff, searchText, orderBy, orderDescending]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <FuseAnimate delay={100}>
        <div className='flex flex-1 items-center justify-center h-full'>
          <Typography color='textSecondary' variant='h5'>
            There are no team members!
          </Typography>
        </div>
      </FuseAnimate>
    );
  }

  return (
    <List className='p-0'>
      <FuseAnimateGroup
        enter={{
          animation: 'transition.slideUpBigIn'
        }}
      >
        {filteredData.map(staffList => (
          <StaffListItem staffList={staffList} key={staffList.id} />
        ))}
      </FuseAnimateGroup>
    </List>
  );
}

export default StaffList;
