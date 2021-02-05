const files = require.context('./docs', false, /\.md$/);
const comRoutes = {
    path: '/component',
    name: 'component',
    component: () => import('./components/ComponentDoc.vue'),
    redirect: '/component/installation',
    children: [],
};
const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/HomePage.vue'),
    },
    {
        path: '/change-log',
        name: 'changeLog',
        component: () => import('./components/ChangeLog.vue'),
    },
    comRoutes,
    {
        path: '/',
        redirect: '/home',
    },
];
files.keys().forEach(key => {
    const name = key.replace(/.\/(.*).md$/, '$1');
    comRoutes.children.push({
        path: name,
        name,
        meta: {
            baseUrl: '/component',
        },
        component: files(key).default,
    });
});

export default routes;
