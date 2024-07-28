import './assets/main.css'
//引入 createApp 创建应用
import { createApp } from 'vue'
//引入App 跟组件
import App from './App.vue'
//引入路由器
import router from './router'


//引入 pinia
import { createPinia } from 'pinia'


//创建应用
const app = createApp(App)

//创建pinia
const pinia = createPinia()
//安装pinia
app.use(pinia)

//使用路由器
app.use(router)
//挂载整个应用到app 容器中
app.mount('#app')




