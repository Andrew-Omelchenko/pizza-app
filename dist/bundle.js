/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(1);


class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */])(this, "updateState", "update");
  }

  _render() {
    const children = this.render();

    this.host.innerHTML = "";

    if (typeof children === "string") {
      this.host.innerHTML = children;
    } else if (Array.isArray(children)) {
      this.host.append(... children);
    } else {
      this.host.append(children);
    }

    return this.host;
  }

  componentReveivedProps(nextProps) {}

  update(nextProps) {
    this.componentReveivedProps(nextProps);
    this.props = nextProps;
    return this._render();
  }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);

    this.state = nextState;
    this._render();

    return nextState;
  }

  render() {}
}

/* harmony default export */ __webpack_exports__["a"] = (Component);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === "function") {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = bindAll;


const toHtml = string => {
  const template = document.createElement("template");
  template.innerHTML = string.trim();

  return template.content;
};
/* unused harmony export toHtml */


const URL_PARAM_REGEXP = /:\w+/g;

const isUrlParam = path => URL_PARAM_REGEXP.test(path);
const urlToRegExp = url => RegExp(`^${url.replace(URL_PARAM_REGEXP, "(.*)")}$`);
const isEqualPaths = (template, url) => urlToRegExp(template).test(url);
/* harmony export (immutable) */ __webpack_exports__["c"] = isEqualPaths;


// template -> /user/:id
// url -> /user/12
const extractUrlParams = (template, url) => {
  const values = url.split("/");  // ["user", "12"]
  const params = {};

  if (!values) {
    return params;
  }

  return template.split("/").reduce((acc, param, index) => {
    if (!isUrlParam(param)) {
      return acc;
    }
    // We need to remove ':' from param name
    acc[param.slice(1)] = values[index];

    return acc;
  }, params);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = extractUrlParams;


const processResponse = res => {
  if (res.ok) {
    return res.json().then(answer => Promise.resolve({ answer, status: res.status }));
    }
  return res.json().then(answer => Promise.reject({ answer, status: res.status }));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = processResponse;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_helper__ = __webpack_require__(1);



class AuthService {
  constructor() {
    this._token = localStorage.getItem("token");
    // payload
    this._claims = JSON.parse(localStorage.getItem("claims"));

    Object(__WEBPACK_IMPORTED_MODULE_1__utils_helper__["a" /* bindAll */])(this, "isAuthorized");
  }

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
    localStorage.setItem("token", token);
  }

  get claims() {
    return this._claims;
  }

  set claims(claims) {
    this._claims = claims;
    localStorage.setItem("claims", JSON.stringify(claims));
  }

  isAuthorized() {
    if (!this.tokenIsNotExpired()) {
      this.clearStorage();
      return false;
    }
    return true;
  }

  clearStorage() {
    this._token = null;
    this._claims = null;
    localStorage.removeItem("token");
    localStorage.removeItem("claims");
  }

  tokenIsNotExpired() {
    if (!this.token) {
      return false;
    }
    return this.claims.exp * 1000 > Date.now();
  }

  login(userData) {
    return fetch(`${__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].BASE_URL}${__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].ENDPOINTS.LOGIN}`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: new Headers().append("content-type", "application/json")
    })
    .then(res => {
      if (res.ok) {
        return res.json().then(answer => {
          this.token = answer.token;
          this.claims = this.parseJwtClaims(answer.token);
          return Promise.resolve({ answer, status: res.status });
          });
        }
      return res.json().then(answer => Promise.reject({ answer, status: res.status }));
    });
  }

  parseJwtClaims(jwtToken) {
    if (jwtToken) {
      let base64Url = jwtToken.split(".")[1];
      // replaces invalid symbols
      let base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
    }
    return {};
  }
}

// Singleton
const AUTH_SERVICE = new AuthService();
/* harmony export (immutable) */ __webpack_exports__["a"] = AUTH_SERVICE;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const API = {
  BASE_URL: "https://pizza-tele.ga/api/v1/",
  ENDPOINTS: {
    STORE_LIST: "store/list",
    CREATE_USER: "user/create",
    LOGIN: "user/login",
    MY_INFO: "user/my_info",
    PIZZA_LIST: "pizza/list",
    CREATE_PIZZA: "pizza/create",
    INGREDIENT_LIST: "ingredient/list",
    TAG_LIST: "tag/list"
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = API;


const STATUS_CODES = {
  OK: "200",
  BAD_REQUEST: "400",
  UNAUTHORIZED: "401",
  FORBIDDEN: "403",
  NOT_FOUND: "404"
};
/* unused harmony export STATUS_CODES */


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_helper__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AuthService__ = __webpack_require__(2);




class AuthHttpService {
  get(endpoint) {
    const headers = new Headers({ "Content-Type": "application/json" });
    
    if (__WEBPACK_IMPORTED_MODULE_2__AuthService__["a" /* AUTH_SERVICE */].token) {
      headers.append("Authorization", `Bearer ${__WEBPACK_IMPORTED_MODULE_2__AuthService__["a" /* AUTH_SERVICE */].token}`);
    }

    return fetch(`${__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].BASE_URL}${endpoint}`, { headers })
      .then(__WEBPACK_IMPORTED_MODULE_1__utils_helper__["d" /* processResponse */]);
  }

  post(endpoint, payload) {
		return fetch(`${__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].BASE_URL}${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: new Headers({ "content-type": "application/json" }),
		})
			.then(__WEBPACK_IMPORTED_MODULE_1__utils_helper__["d" /* processResponse */]);
  }
  
  getStores() {
		return this.get(__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].ENDPOINTS.STORE_LIST);
  }
  
  createUser(userData) {
		return this.post(__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].ENDPOINTS.CREATE_USER, userData);
	}

	getMyInfo() {
		return this.get(__WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* API */].ENDPOINTS.MY_INFO);
	}
}

const AUTH_HTTP_SERVICE = new AuthHttpService();
/* harmony export (immutable) */ __webpack_exports__["a"] = AUTH_HTTP_SERVICE;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(7);



const router = new __WEBPACK_IMPORTED_MODULE_0__framework_Router__["a" /* default */]({ routes: __WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */], host: document.getElementById("root") });


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_helper__ = __webpack_require__(1);



class Router extends __WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */] {
  constructor(props) {
    super(props);

    const { routes, host } = props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null
    };

    this.host = host;

    Object(__WEBPACK_IMPORTED_MODULE_1__utils_helper__["a" /* bindAll */])(this, "handleUrlChange", "navigateTo");

    window.addEventListener("hashchange", () => {
      this.handleUrlChange(this.path);
    });

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;

    // const nextRoute = routes.find(({ href }) => href === this.path);
    const nextRoute = routes.find(({ href }) => Object(__WEBPACK_IMPORTED_MODULE_1__utils_helper__["c" /* isEqualPaths */])(href, this.path));
    console.log(nextRoute);

    if (nextRoute && nextRoute !== currentRoute) {
      if (nextRoute.onEnter) {
        this.handleOnEnter(nextRoute);
        return;
      }

      if (nextRoute.authorized && !nextRoute.authorized()) {
        this.navigateTo("/login");
        return;
      }

      if (nextRoute.redirectTo) {
        this.navigateTo(nextRoute.redirectTo);
        return;
      }

      this.updateState({
        currentComponent: new nextRoute.component(),
        currentRoute: nextRoute
      });
    }
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  handleOnEnter({ onEnter }) {
    onEnter(this.navigateTo);
  }

  render() {
    const { currentComponent, currentRoute } = this.state;

    return currentComponent.update({
      params: Object(__WEBPACK_IMPORTED_MODULE_1__utils_helper__["b" /* extractUrlParams */])(currentRoute.href, this.path)
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Login__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Register__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MyInfo__ = __webpack_require__(11);






const routes = [
  {
    href: "",
    redirectTo: "/"
  },
  {
		href: "/",
		component: __WEBPACK_IMPORTED_MODULE_1__components_App__["a" /* default */],
		authorized: __WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AUTH_SERVICE */].isAuthorized
	},
  {
    href: "/login",
    component: __WEBPACK_IMPORTED_MODULE_2__components_Login__["a" /* default */]
  },
  {
		href: "/register",
		component: __WEBPACK_IMPORTED_MODULE_3__components_Register__["a" /* default */],
	},
	{
		href: "/my-info",
		component: __WEBPACK_IMPORTED_MODULE_4__components_MyInfo__["a" /* default */],
		authorized: __WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AUTH_SERVICE */].isAuthorized
	},
	{
		href: "/logout",
		onEnter: navigateTo => {
      // console.log("Inside onEnter()");
			__WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AUTH_SERVICE */].clearStorage();
      navigateTo("/");
    }
	}
];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);


class App extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('app-container');
	}

	render() {
		return `
      <h2>App form</h2>
    `;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__(2);



class Login extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("click", this.handleClick);
    this.host.addEventListener("submit", this.handleSubmit);

    console.log(__WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AUTH_SERVICE */].isAuthorized());
  }

  handleClick(ev) {
		if (ev.target.id === "go-to-register-page-btn") {
			window.location.hash = '/register';
		}
	}

  handleSubmit(ev) {
    ev.preventDefault();

    const userData = {
      username: ev.target.username.value,
			password: ev.target.password.value
    };
    
    console.log(userData);

    __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AUTH_SERVICE */].login(userData)
      .then(res => {
        if (res.answer.success) {
          console.log(__WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AUTH_SERVICE */].token);
          console.log(__WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AUTH_SERVICE */].claims);
          console.log(__WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AUTH_SERVICE */].isAuthorized());
					window.location.hash = '/my-info';
				}
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return `
      <form class="login-form">
        <label for="username">Username: </label>
        <input 
          name="username"
          class="username-fld" 
          id="username" 
          type="text" 
          minlength="2" 
          maxlength="24" 
          placeholder="Enter your name..." 
          required 
          value="">
        <label for="password">Password: </label>
        <input 
          name="password" 
          class="password-fld"
          id="password" 
          type="password" 
          minlength="8" 
          placeholder="Enter your password..." 
          required 
          value="">
        <button id="login-btn" type="submit">Login</button>
        <button id="go-to-register-page-btn" type="button">Go to register page</button>
      </form>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthHttpService__ = __webpack_require__(4);



class Register extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
	constructor(props) {
		super(props);

		this.state = {
			options: ""
		};

		this.host = document.createElement('div');
		this.host.classList.add('register-container');
		this.host.addEventListener("click", this.handleClick);
		this.host.addEventListener("submit", this.handleSubmit);

		__WEBPACK_IMPORTED_MODULE_1__services_AuthHttpService__["a" /* AUTH_HTTP_SERVICE */].getStores()
			.then(data => {
				const options = data.answer.map(store => `<option value="${store.id}">${store.name}</option>`).join("");
				this.updateState({ options });
			});
	}

	handleClick(ev) {
		if (ev.target.id === "go-to-login-page-btn") {
			window.location.hash = '/login';
		}
	}

	handleSubmit(ev) {
		ev.preventDefault();

    const userData = {
      username: ev.target.username.value,
			password: ev.target.password.value,
			password_repeat: ev.target.password_repeat.value,
			email: ev.target.email.value,
			store_id: Number(ev.target.store_id.value),
			store_password: ev.target.store_password.value
		};
		
		console.log(userData);

		__WEBPACK_IMPORTED_MODULE_1__services_AuthHttpService__["a" /* AUTH_HTTP_SERVICE */].createUser(userData)
			.then(res => {
				if (res.answer.success) {
					window.location.hash = '/login';
				}
			})
			.catch(err => {
        console.log(err);
      });
	}

	render() {
		const { options } = this.state;

		return `
			<form class="register-form">
				<label for="username">Username:</label>
				<input 
					name="username" 
					id="username" 
					type="text" 
					minlength="2" 
					maxlength="24" 
					placeholder="Enter new user name..." 
					required
					value="">
				<label for="password">Password:</label>
				<input 
					name="password" 
					id="password" 
					type="password" 
					minlength="8"
					placeholder="Enter password..."  
					required
					value="">
				<label for="password_repeat">Confirm password:</label>
				<input 
					name="password_repeat" 
					id="password_repeat" 
					type="password" 
					minlength="8" 
					placeholder="Repeat entering password..." 
					required
					value="">
				<label for="email">Email:</label>
				<input 
					name="email" 
					id="email" 
					type="email"
					placeholder="Enter email address..." 
					required
					value="">
				<label for="store_id">Choose your store:</label>
				<select name="store_id" id="store_id" required>
					${options}
				</select>
				<label for="store_password">Store password:</label>
				<input 
					name="store_password" 
					id="store_password" 
					type="password" 
					minlength="8"
					placeholder="Enter password for selected store..."  
					required
					value="">
				<button id="register-btn" type="submit">Register</button>
				<button id="go-to-login-page-btn" type="button">Go to login page</button>
			</form>
    `;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthHttpService__ = __webpack_require__(4);



class MyInfo extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
	constructor(props) {
		super(props);

		this.state = {
			myInfo: {
				username: "",
				uuid: "",
				email: "",
				created_at: "",
				last_login: ""
			}
		};

		this.host = document.createElement('div');
		this.host.classList.add('my-info-container');
		this.host.addEventListener("click", this.handleClick);

		__WEBPACK_IMPORTED_MODULE_1__services_AuthHttpService__["a" /* AUTH_HTTP_SERVICE */].getMyInfo()
			.then(data => this.updateState({ myInfo: data.answer }));
	}

	handleClick(ev) {
		if (ev.target.id === "go-to-app-btn") {
			window.location.hash = '/';
		}
		if (ev.target.id === "logout-btn") {
			window.location.hash = '/logout';
		}
	}

	render() {
		const { myInfo } = this.state;

    return `
			<h2>My Info</h2>
			<p>Username: ${myInfo.username}</p>
			<p>UUID: ${myInfo.uuid}</p>
			<p>Email: ${myInfo.email}</p>
			<p>Created at: ${myInfo.created_at}</p>
			<p>Last login: ${myInfo.last_login}</p>
			<button id="go-to-app-btn" type="button">Go to Application</button>
			<button id="logout-btn" type="button">Logout</button>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MyInfo);

/***/ })
/******/ ]);