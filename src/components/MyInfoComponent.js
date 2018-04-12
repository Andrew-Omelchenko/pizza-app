import Component from "../framework/Component";
import { AUTH_HTTP_SERVICE } from "../services/AuthHttpService";

class MyInfoComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myInfo: {
				username: "",
				uuid: "",
				email: "",
				created_at: "",
				last_login: ""
			}
		};

		this.host = document.createElement("div");
		this.host.classList.add("my-info-container");
		this.host.addEventListener("click", this.handleClick);

		AUTH_HTTP_SERVICE.getMyInfo()
			.then(data => this.updateState({ myInfo: data.answer }));
	}

	handleClick(ev) {
		if (ev.target.id === "dashboard-btn") {
			window.location.hash = "/";
		}
	}

	render() {
		const { myInfo } = this.state;

    return `
			<h2>Username: ${myInfo.username}</h2>
			<p>UUID: ${myInfo.uuid}</p>
			<p>Email: ${myInfo.email}</p>
			<p>Created at: ${myInfo.created_at}</p>
			<p>Last login: ${myInfo.last_login}</p>
			<button class="btn btn-wide" id="dashboard-btn" type="button">Dashboard</button>
    `;
  }
}

export default MyInfoComponent;
