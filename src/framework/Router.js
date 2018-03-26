import Component from "./Component";
import { bindAll, isEqualPaths, extractUrlParams } from "../utils/helper";

class Router extends Component {
  constructor(props) {
    super(props);

    const { routes, host } = props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null
    };

    this.host = host;

    bindAll(this, "handleUrlChange", "navigateTo");

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
    const nextRoute = routes.find(({ href }) => isEqualPaths(href, this.path));
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
      params: extractUrlParams(currentRoute.href, this.path)
    });
  }
}

export default Router;