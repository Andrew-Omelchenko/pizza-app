import Component from "../framework/Component";
import HeaderComponent from "./HeaderComponent";
import MyInfoComponent from "./MyInfoComponent";
import FooterComponent from "./FooterComponent";

class MyInfo extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
		this.myInfoComponent = new MyInfoComponent();
		this.footerComponent = new FooterComponent();

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.myInfoComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default MyInfo;
