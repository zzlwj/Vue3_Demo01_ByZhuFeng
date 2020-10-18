import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

//vue3都是函数
// createApp(App).use(store).use(router).mount('#app')

//以前写法
const app=createApp(App)
app.use(Antd) 
app.use(store)
app.use(router)
app.mount('#app')