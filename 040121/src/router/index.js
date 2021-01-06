import { createRouter, createWebHistory } from "vue-router";
import Forside from "../views/Forside.vue";
import KontaktOs from "../views/KontaktOs.vue";
import Uddannelser from "../views/Uddannelser.vue";
import BesøgOs from "../views/BesøgOs.vue";
import TeamDanmark from "../views/TeamDanmark.vue";
import LogInd from "../views/LogInd.vue";
import Skema from "../views/Skema.vue";
import Afleveringer from "../views/Afleveringer.vue";

const routes = [
  {
    path: "/",
    component: Forside,
  },
  {
    path: "/kontaktos",
    component: KontaktOs,
  },
  {
    path: "/uddannelser",
    component: Uddannelser,
  },
  {
    path: "/besoegos",
    component: BesøgOs,
  },
  {
    path: "/teamdk",
    component: TeamDanmark,
  },
  {
    path: "/login",
    component: LogInd,
  },
  {
    path: "/skema",
    component: Skema,
  },
  {
    path: "/afleveringer",
    component: Afleveringer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
