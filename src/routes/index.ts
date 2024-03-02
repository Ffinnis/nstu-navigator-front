import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Main]: {
    component: asyncComponentLoader(() => import('@/pages/Main')),
    path: '/',
    title: 'Main',
  },
  [Pages.Map]: {
    component: asyncComponentLoader(() => import('@/pages/Map')),
    path: '/map',
    title: 'Map',
  },
  [Pages.User]: {
    component: asyncComponentLoader(() => import('@/pages/User')),
    path: '/user',
    title: 'User',
  },
};

export default routes;
