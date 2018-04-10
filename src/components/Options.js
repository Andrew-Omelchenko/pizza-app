import Component from "../framework/Component";
import { AUTH_SERVICE } from "../services/AuthService";

class Options extends Component {
	constructor(props) {
    super(props);

    let uname = "";

    if (AUTH_SERVICE.claims) {
      const { username } = AUTH_SERVICE.claims;
      uname = username;
    }

    this.state = {
      user: uname
    };

		this.host = document.createElement("div");
    this.host.classList.add("options");

	}

	render() {
		const { user } = this.state;

    return `
      <i class="fa fa-user fa-fw label" aria-hidden="true"></i>
      <span>${user}</span>
      <a href=${user ? "#/logout" : "#/login"}>${user ? "Logout" : "Login Page"}</a>
		`;
	}
}

export default Options;