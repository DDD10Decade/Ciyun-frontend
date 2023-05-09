import {
    createApp
} from 'vue'
import App from './App.vue'
import Element from 'element-plus';
import 'element-plus/dist/index.css';
import axios from "axios";
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App).use(router)
app.use(router).use(Element).mount('#app')
app.config.globalProperties.$axios = axios;
app.provide("$axios", axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}