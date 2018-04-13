import Component from "../framework/Component";
import HeaderComponent from "./HeaderComponent";
import RegisterComponent from "./RegisterComponent";
import FooterComponent from "./FooterComponent";

class Register extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
    this.registerComponent = new RegisterComponent();
    this.footerComponent = new FooterComponent();

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.registerComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Register;
