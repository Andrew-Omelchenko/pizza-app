import { AUTH_SERVICE } from "./services/AuthService";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import MyInfo from "./components/MyInfo";

const routes = [
  {
    href: "",
    redirectTo: "/"
  },
  {
		href: "/",
		component: Dashboard,
		authorized: AUTH_SERVICE.isAuthorized
	},
  {
    href: "/login",
    component: Login
  },
  {
		href: "/register",
		component: Register,
	},
	{
		href: "/my-info",
		component: MyInfo,
		authorized: AUTH_SERVICE.isAuthorized
	},
	{
		href: "/logout",
		onEnter: navigateTo => {
      // console.log("Inside onEnter()");
			AUTH_SERVICE.clearStorage();
      navigateTo("/login");
    }
	}
];

export default routes;
