import {
    createApp
} from 'vue'
import App from './App.vue'
import Element from 'element-plus';
import 'element-plus/dist/index.css';
import axios from "axios";
import router from './router'

const app = createApp(App).use(router)
app.use(router).use(Element).mount('#app')
app.provide("$axios", axios)