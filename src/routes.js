import { AUTH_SERVICE } from "./services/AuthService";
import AppEntry from "./components/AppEntry";
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
		component: AppEntry,
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
      navigateTo("/");
    }
	}
];

export default routes;