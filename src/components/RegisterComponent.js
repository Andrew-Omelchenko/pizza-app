import Component from "../framework/Component";
import { AUTH_HTTP_SERVICE } from "../services/AuthHttpService";

class RegisterComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: ""
		};

		this.host = document.createElement("div");
		this.host.classList.add("register-container");
		this.host.addEventListener("click", this.handleClick);
		this.host.addEventListener("submit", this.handleSubmit);

		AUTH_HTTP_SERVICE.getStores()
			.then(data => {
				const options = data.answer.map(store => `<option value="${store.id}">${store.name}</option>`).join("");
				this.updateState({ options });
			});
	}

	handleClick(ev) {
		if (ev.target.id === "go-to-login-page-btn") {
			window.location.hash = "/login";
		}
	}

	handleSubmit(ev) {
		ev.preventDefault();

    const userData = {
      username: ev.target.username.value,
			password: ev.target.password.value,
			password_repeat: ev.target.password_repeat.value,
			email: ev.target.email.value,
			store_id: Number(ev.target.store_id.value),
			store_password: ev.target.store_password.value
		};
		
		console.log(userData);

		AUTH_HTTP_SERVICE.createUser(userData)
			.then(res => {
				if (res.answer.success) {
					window.location.hash = "/login";
				}
			})
			.catch(err => {
        console.log(err);
      });
	}

	render() {
		const { options } = this.state;

		return `
			<form class="register-form">
				<label for="username">Username:</label>
				<input 
					name="username" 
					id="username" 
					type="text" 
					minlength="2" 
					maxlength="24" 
					placeholder="Enter new user name..." 
					required
					value="">
				<label for="password">Password:</label>
				<input 
					name="password" 
					id="password" 
					type="password" 
					minlength="8"
					placeholder="Enter password..."  
					required
					value="">
				<label for="password_repeat">Confirm password:</label>
				<input 
					name="password_repeat" 
					id="password_repeat" 
					type="password" 
					minlength="8" 
					placeholder="Repeat entering password..." 
					required
					value="">
				<label for="email">Email:</label>
				<input 
					name="email" 
					id="email" 
					type="email"
					placeholder="Enter email address..." 
					required
					value="">
				<label for="store_id">Choose your store:</label>
				<select name="store_id" id="store_id" required>
					${options}
				</select>
				<label for="store_password">Store password:</label>
				<input 
					name="store_password" 
					id="store_password" 
					type="password" 
					minlength="8"
					placeholder="Enter password for selected store..."  
					required
					value="">
				<button id="register-btn" type="submit">Register</button>
				<button id="go-to-login-page-btn" type="button">Go to login page</button>
			</form>
    `;
	}
}

export default RegisterComponent;