import Component from "../framework/Component";
import { AUTH_HTTP_SERVICE } from "../services/AuthHttpService";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: ""
		};

		this.host = document.createElement('div');
		this.host.classList.add('register-container');
		this.host.addEventListener("submit", this.handleSubmit);

		AUTH_HTTP_SERVICE.getStores()
			.then(data => {
				const options = data.answer.map(store => `<option value="${store.id}">${store.name}</option>`).join("");
				this.updateState({ options });
			});
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
					window.location.hash = '/login';
				}
			})
			.catch(err => {
        console.log(err);
      });
	}

	render() {
		const { options } = this.state;

		return `
			<h2>Register form</h2>
			<form class="register-form">
				<label for="username">Username:</label>
				<input type="text" name="username" id="username" required>
				<label for="password">Password:</label>
				<input type="password" name="password" id="password" required>
				<label for="password_repeat">Confirm password:</label>
				<input type="password" name="password_repeat" id="password_repeat" required>
				<label for="email">Email:</label>
				<input type="email" name="email" id="email" required>
				<label for="store_id">Choose your store:</label>
				<select name="store_id" id="store_id" required>
					${options}
				</select>
				<label for="store_password">Store password:</label>
				<input type="password" name="store_password" id="store_password" required>
				<button class="register-btn">Register</button>
			</form>
    `;
	}
}

export default Register;