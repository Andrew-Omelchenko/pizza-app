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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(5);





const router = new __WEBPACK_IMPORTED_MODULE_1__framework_Router__["a" /* default */]({ routes: __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */], host: document.getElementById("root") });

// const app = new App({});
// app.update();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Component__ = __webpack_require__(0);



class App extends __WEBPACK_IMPORTED_MODULE_1__framework_Component__["a" /* default */] {
  constructor({ host }) {
    super();

    // initialize state object
    this.state = {};

    // bindAll(
    //   this,  
    //   "handleError"
    // );

    this.host = host;

    // initialize components
    
  }

  render() {
    // const { } = this.state;

    // return [];
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (App);


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Login__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Login1__ = __webpack_require__(7);



const routes = [
  {
    component: __WEBPACK_IMPORTED_MODULE_1__components_Login1__["a" /* default */],
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
    component: __WEBPACK_IMPORTED_MODULE_0__components_Login__["a" /* default */],
    href: "/login"
  }
];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);


class Login extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    console.log(ev);
  }

  render() {
    return `
      <h2>Login form</h2>
      <form class="login-form">
        <input name="login" placeholder="login" required class="login-fld" value="">
        <input name="password" type="password" placeholder="password" required class="password-fld" value="">
        <button class="submit-btn">Submit</button>
      </form>
      <a href="#/">Go to main</a>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);


class Login1 extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    console.log(ev);
  }

  componentReveivedProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return `
      <form class="login-form">
        <input name="login" placeholder="login" required class="login-fld" value="">
        <input name="password" type="password" placeholder="password" required class="password-fld" value="">
        <button class="submit-btn">Submit1</button>
      </form>
      <a href="#/login">Go to login</a>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Login1);

/***/ })
/******/ ]);