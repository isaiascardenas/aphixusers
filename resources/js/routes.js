import App from "./views/App.vue";
import Main from "./views/Main.vue";
import Login from "./views/Login.vue";
import HomeLayout from "./views/HomeLayout.vue";
import IndexUsers from "./views/users/IndexUsers.vue";

let routes = [
  {
    path: "/",
    redirect: { name: "Home" },
    component: { template: "<router-view></router-view>" },
    component: App,
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomeLayout
      },
      {
        path: "/login",
        name: "Login",
        component: Login
      },
      {
        path: "/main",
        redirect: { name: "Index Usuarios" },
        name: "Main",
        component: Main,
        children: [
          {
            path: "users",
            name: "Index Usuarios",
            component: IndexUsers
          }
        ]
      }
    ]
  }
];

export default routes;
