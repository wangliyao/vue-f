import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from '@/store'
import router from '@/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css' 
const app = createApp(App)

app.use(store)
app.use(vue3videoPlay)
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app');
