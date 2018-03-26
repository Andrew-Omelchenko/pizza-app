import Login from "./components/Login";
import Login1 from "./components/Login1";

const routes = [
  {
    component: Login1,
    href: "/user/:id",
    // redirectTo: "/login",
    // onEnter: navigateTo => {
    //   if (true) {
    //     console.log("Inside onEnter()");
    //     navigateTo("/login");
    //   }
    // }
  },
  {
    component: Login,
    href: "/login"
  }
];

export default routes;