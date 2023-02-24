import { createApp } from 'vue';
import Meta from 'vue-3-meta';
import App from './App.vue';
import './style.css';

const app = createApp(App).mount('#app');
app.use(Meta);