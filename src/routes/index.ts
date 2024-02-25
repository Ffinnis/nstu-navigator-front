import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Main]: {
    component: asyncComponentLoader(() => import('@/pages/Main')),
    path: '/',
    title: 'Main',
  },
};

export default routes;
