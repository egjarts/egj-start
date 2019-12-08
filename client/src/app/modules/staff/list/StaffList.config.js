import React from 'react';

const Config = {
  id: 'staff.list',
  displayName: 'Staff List',
  accessControl: {
    grant: {
      Staff: 'read'
    }
  },
  routes: [
    {
      path: '/staff/list',
      component: React.lazy(() => import('./Staff'))
    }
  ]
};

export default Config;
