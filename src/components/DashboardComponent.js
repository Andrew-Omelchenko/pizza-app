import Component from "../framework/Component";

class DashboardComponent extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement("div");
		this.host.classList.add("dashboard-container");
	}

	render() {
		return `
      <h2>App form</h2>
    `;
	}
}

export default DashboardComponent;