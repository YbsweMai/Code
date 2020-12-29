import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
// import Code from "../pages/code.vue"
import Lesson from "../pages/lesson.vue"
import Interest from "../pages/interest.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Code",
    components: {
      Home
    }
  },
  {
    path: "/interest",
    name: "Interest",
    component: Interest
  },
  {
    path: "/lesson",
    name: "Lesson",
    component: Lesson
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
