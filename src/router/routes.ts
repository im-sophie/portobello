import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    props: {
      title: 'Projects'
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/Projects.vue')
      }
    ]
  },
  {
    path: '/tickets',
    component: () => import('layouts/MainLayout.vue'),
    props: {
      title: 'Tickets'
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/Tickets.vue')
      }
    ]
  },
  {
    path: '/wiki',
    component: () => import('layouts/MainLayout.vue'),
    props: {
      title: 'Wiki'
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/Wiki.vue')
      }
    ]
  },
  {
    path: '/cicd',
    component: () => import('layouts/MainLayout.vue'),
    props: {
      title: 'CI/CD'
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/CICD.vue')
      }
    ]
  },
  {
    path: '/monitoring',
    component: () => import('layouts/MainLayout.vue'),
    props: {
      title: 'Monitoring'
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/Monitoring.vue')
      }
    ]
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    props: {
      title: 'Settings',
      tabs: [
        {
          name: 'profile',
          label: 'Profile'
        },
        {
          name: 'users',
          label: 'Users'
        }
      ]
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/Settings.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Error404.vue'),
        props: {
          title: 'Error'
        }
      }
    ]
  }
];

export default routes;
