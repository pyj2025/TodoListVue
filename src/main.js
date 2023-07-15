import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import App from "./App.vue";
import store from "./store/storage";

createApp(App).use(store).mount("#app");
