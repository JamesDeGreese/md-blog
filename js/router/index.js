import routes from "./routes.js";

const index = new VueRouter({
    mode: 'history',
    routes: routes,
})

export default index