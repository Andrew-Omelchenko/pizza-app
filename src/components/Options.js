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
    
    let login = false;
    if (this.props) {
      const { isLogin } = this.props;
      login = isLogin;
    }

    const href = () => {
      if (!user) {
        if (login) {
          return "register";
        }
        return "login";
      }
      return "logout";
    };

    return `
      <i class="fa fa-user fa-fw label" aria-hidden="true"></i>
      <a href="#/my-info">${user}</a>
      <a href="#/${href()}">${href().toUpperCase()}</a>
    `;
  }
}

export default Options;
