export default {
    routes: [
        // 登录  
        {
            name: 'login',
            path: '/login',
            meta: {title: '登录', keepAlive: true},
            component: () => import("../layout/login.vue"),
        },     
        // 这个要放在最后
        {
            name: '404',
            path: '/404',
            meta: {title: '404', keepAlive: true},
            component: () => import("./404.vue")
        },





    ]
}