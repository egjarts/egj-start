import React from 'react';

const Config = {
  settings: {
    layout: {
      config: {
        header: {
          display: true
        },
        navbar: {
          display: false
        },
        toolbar: {
          display: false
        },
        footer: {
          display: false
        },
        leftSidePanel: {
          display: true
        },
        rightSidePanel: {
          display: false
        }
      }
    }
  },
  id: 'staff.registration',
  displayName: 'New Staff Registration',
  accessControl: {
    grant: {
      Authenticated: 'read',
      TestRole: 'create, read:own, update',
      SuperAdmin: ['create', 'read', 'update', 'delete']
    }
  },
  routes: [
    {
      path: ['/register/:otp?', '/welcome/:otp?'],
      component: React.lazy(() => import('./Registration'))
    }
  ]
};

export default Config;
