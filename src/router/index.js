import { createRouter, createWebHashHistory } from "vue-router";
// 1. 创建路由规则
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];
