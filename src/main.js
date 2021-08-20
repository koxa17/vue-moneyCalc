import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from './components';

const app = createApp(App)

// Глобальная регистрация компонентов
components.forEach(component => {
    app.component(component.name, component)
});

app.use(router).mount('#app')

