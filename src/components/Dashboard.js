import Component from "../framework/Component";
import HeaderComponent from "./HeaderComponent";
import DashboardComponent from "./DashboardComponent";
import FooterComponent from "./FooterComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
		this.dashboardComponent = new DashboardComponent();
		this.footerComponent = new FooterComponent();

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.dashboardComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Dashboard;
