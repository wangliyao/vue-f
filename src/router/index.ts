import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';

const routes: Array < RouteRecordRaw > = [{
    path: '/',
    name: 'home',
    meta: {
      title: '',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/:id',
    name: 'detail',
    meta: {
      title: '详情页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/detail.vue')
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      title: '分类页',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/category.vue'),
    children: [
      { path: '/category', component: () => import('@/pages/category.vue'), alias: ['/movie', '/tvshow', '/show', '/animation'] },
    ]
  },
  {
    path: '/search',
    name: 'search',
    props: route => ({ query: route.query.q }),
    meta: {
      title: '搜索',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/search.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;