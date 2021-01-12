import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/css/normalize.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
