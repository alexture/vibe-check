import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import "./style.css";
import App from "./App.vue";
import GetTokens from "./GetTokens.vue";

const routes = [
  { path: '/', component: GetTokens }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount("#app");
