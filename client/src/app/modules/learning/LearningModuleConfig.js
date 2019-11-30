import React from 'react';
import { Redirect } from 'react-router-dom';

export const LearningModuleConfig = {
  settings: {
    layout: {}
  },
  routes: [
    {
      path: '/apps/learning/courses/:courseId/:courseHandle?',
      component: React.lazy(() => import('./course/Course'))
    },
    {
      path: '/apps/learning/courses',
      component: React.lazy(() => import('./courses/Courses'))
    },
    {
      path: '/apps/learning',
      component: () => <Redirect to='/apps/learning/courses' />
    }
  ]
};
