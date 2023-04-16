import { createRouter, createWebHistory } from 'vue-router';
import Layout from 'components/layout/index.vue';

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '/home',
				name: 'Home',
				title: '主页',
				component: () => import('@/views/Home.vue'),
			},
			{
				path: '/charts',
				name: 'baseCharts',
				meta: {
					title: '图表',
				},
				component: () => import('@/views/charts/Charts.vue'),
			},
		],
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录',
		},
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/:catchAll(.*)',
		name: '404',
		meta: {
			title: '404',
		},
		component: () => import('@/views/404.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from, next) => {
// 	document.title = `${to.meta.title} | vue-admin`;
// 	next();
// });
export default router;
