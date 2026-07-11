export const MENU_LIST = [
  {
    path: '/:path(.*)*',
    name: 'PageNotFound',
    meta: {
      title: 'ErrorPage',
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: '/:path(.*)*',
        name: 'PageNotFound',
        meta: {
          title: 'ErrorPage',
          hideBreadcrumb: true,
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/index',
    meta: {
      hideChildrenInMenu: true,
      icon: 'simple-icons:about-dot-me',
      title: 'routes.dashboard.about',
      orderNo: 100000,
    },
    children: [
      {
        path: 'index',
        name: 'AboutPage',
        meta: {
          title: 'routes.dashboard.about',
          icon: 'simple-icons:about-dot-me',
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/analysis',
    meta: {
      orderNo: 10,
      icon: 'ion:grid-outline',
      title: 'routes.dashboard.dashboard',
    },
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        meta: {
          title: 'routes.dashboard.analysis',
        },
      },
      {
        path: 'workbench',
        name: 'Workbench',
        meta: {
          title: 'routes.dashboard.workbench',
        },
      },
    ],
  },
  {
    path: '/permission',
    name: 'Permission',
    redirect: '/permission/menu',
    meta: {
      orderNo: 15,
      icon: 'ion:key-outline',
      title: 'routes.demo.permission.permission',
    },
    children: [
      {
        path: 'menu',
        name: 'PermissionMenu',
        meta: {
          title: 'routes.demo.permission.menu',
          roles: ['super'],
        },
      },
    ],
  },
  {
    path: '/setup',
    name: 'SetupDemo',
    redirect: '/setup/index',
    meta: {
      orderNo: 90000,
      hideChildrenInMenu: true,
      icon: 'whh:paintroll',
      title: 'routes.demo.setup.page',
    },
    children: [
      {
        path: 'index',
        name: 'SetupDemoPage',
        meta: {
          title: 'routes.demo.setup.page',
          icon: 'whh:paintroll',
          hideMenu: true,
        },
      },
    ],
  },
];
