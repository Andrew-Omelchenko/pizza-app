import Component from "../framework/Component";
import HeaderComponent from "./HeaderComponent";
import AppEntryComponent from "./AppEntryComponent";
import FooterComponent from "./FooterComponent";

class AppEntry extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
		this.appEntryComponent = new AppEntryComponent();
		this.footerComponent = new FooterComponent();

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.appEntryComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default AppEntry;