//创建一个路由器
//引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
//引入一个个可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

//创建路由器
const router = createRouter({
    history: createWebHistory(),  //路由器的工作模式
    routes: [
        {
            name: 'rname_home',
            path: '/home',
            component: Home
        },
        {
            name: 'rname_news',
            path: '/news',
            component: News,
            children: [
                {
                    /* query 写法
                    path: 'detail',
                    component: Detail*/

                    /* param 写法
                    name: 'rname_detail',
                    path: 'detail/:id/:title/:content?',  // ？ 号是，有就传， 没有就不传
                    component: Detail,*/

                    /* props 写法*/
                    name: 'rname_detail',
                    //path: 'detail/:id/:title/:content?',  //props 第一种写法时用
                    path: 'detail',  //props 第二种写法时用
                    component: Detail,

                    //props 第一种写法:讲路由收到的所有params 参数作为 props传给路由组件
                    //props: true

                    //props 第二种写法: 函数写法， 可以自己决定将什么作为props给路由组件
                    props(route) {
                        return route.query
                    }
                }
            ]
        },
        {
            name: 'rname_about',
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

//暴露出去router
export default router