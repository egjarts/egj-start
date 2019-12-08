import React from 'react';

export const Config = {
  id: 'module.list',
  displayName: 'My Apps',
  routes: [
    {
      path: '/module/list',
      exact: true,
      component: React.lazy(() => import('./ModuleList'))
    }
  ]
};

export default Config;
