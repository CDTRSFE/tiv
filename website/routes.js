const files = require.context('./docs', false, /\.md$/);
const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/HomePage.vue'),
    },
    {
        path: '/component',
        name: 'component',
        component: () => import('./components/ComponentDoc.vue'),
        redirect: '/component/installation',
        children: [],
    },
    {
        path: '/',
        redirect: '/home',
    },
];
files.keys().forEach(key => {
    const name = key.replace(/.\/(.*).md$/, '$1');
    routes[1].children.push({
        path: name,
        name,
        meta: {
            baseUrl: '/component',
        },
        component: files(key).default,
    });
});

export default routes;
