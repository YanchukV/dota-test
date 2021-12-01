import { lazy } from 'react';

const routes = {
  home: {
    path: '/',
    component: lazy( () => import("../components/Heroes"))
  },
  hero: {
    path: '/:heroname',
    component: lazy( () => import("../components/Hero"))
  }
};

export default routes;
