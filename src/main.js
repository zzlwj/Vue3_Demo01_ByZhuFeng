import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//vue3都是函数
createApp(App).use(store).use(router).mount('#app')

//以前写法
// const Vue=createApp(App)
// Vue.use(store)
// Vue.use(router)
// Vue.mount('#app')