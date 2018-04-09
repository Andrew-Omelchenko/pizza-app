import Component from "../framework/Component";
import { AUTH_HTTP_SERVICE } from "../services/AuthHttpService";

class MyInfo extends Component {
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

		this.host = document.createElement('div');
		this.host.classList.add('my-info-container');
		this.host.addEventListener("click", this.handleClick);

		AUTH_HTTP_SERVICE.getMyInfo()
			.then(data => this.updateState({ myInfo: data.answer }));
	}

	handleClick(ev) {
		if (ev.target.id === "go-to-app-btn") {
			window.location.hash = '/';
		}
		if (ev.target.id === "logout-btn") {
			window.location.hash = '/logout';
		}
	}

	render() {
		const { myInfo } = this.state;

    return `
			<h2>My Info</h2>
			<p>Username: ${myInfo.username}</p>
			<p>UUID: ${myInfo.uuid}</p>
			<p>Email: ${myInfo.email}</p>
			<p>Created at: ${myInfo.created_at}</p>
			<p>Last login: ${myInfo.last_login}</p>
			<button id="go-to-app-btn" type="button">Go to Application</button>
			<button id="logout-btn" type="button">Logout</button>
    `;
  }
}

export default MyInfo;