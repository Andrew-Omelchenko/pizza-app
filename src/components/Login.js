import Component from "../framework/Component";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import FooterComponent from "./FooterComponent";

class Login extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
		this.loginComponent = new LoginComponent();
		this.footerComponent = new FooterComponent();

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    return [
      this.headerComponent.update({ isLogin: true }),
      this.loginComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Login;