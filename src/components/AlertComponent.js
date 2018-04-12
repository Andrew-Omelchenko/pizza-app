import Component from "../framework/Component";

class AlertComponent extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      alertTxt: ""
    };

		this.host = document.createElement("div");
		this.host.classList.add("alert-container");
	}

	render() {
    const { alertTxt } = this.state;

    return `
      <p>
        ${alertTxt}
      </p>
    `;
  }
}

export default AlertComponent;