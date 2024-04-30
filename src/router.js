/* eslint-disable */ 
import {createRouter, createWebHashHistory} from 'vue-router';

const routes= [
	{
		path: '/',
        name:'landing',
		component: () => import('./pages/Landing.vue')
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: () => import('./pages/Portfolio.vue')
	},
	{
		path: '/flash',
		name: 'flash',
		component: () => import('./pages/Flash.vue')
	},
	{
		path: '/melanated',
		name: 'melanated',
		component: () => import('./pages/Melanated.vue')
	}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
	scrollBehavior () {
        return { left: 0, top: 0 };
    }
});

export default router;