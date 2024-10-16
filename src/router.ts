import { createMemoryHistory, createRouter } from "vue-router";

import PinUser from "./components/PinUser.vue";
import LoginUser from "./components/LoginUser.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
    {path:'/',component:LoginUser},
    {path:'/pin',component:PinUser},
    {path:'/home',component:HomePage}
]

const router = createRouter({
    history:createMemoryHistory(),
    routes
})

export default router;