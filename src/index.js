import App from "./App";
import Router from "./framework/Router";

import routes from "./routes";

const router = new Router({ routes, host: document.getElementById("root") });

// const app = new App({});
// app.update();
