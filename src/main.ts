import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SnackbarService, Vue3Snackbar } from 'vue3-snackbar'
import "vue3-snackbar/styles";
import router from './router';

createApp(App).use(router).use(SnackbarService).component("vue3-snackbar",Vue3Snackbar).mount('#app')
