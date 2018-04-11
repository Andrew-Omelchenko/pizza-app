import Component from "../framework/Component";
import { AUTH_SERVICE } from "../services/AuthService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("click", this.handleClick);
    this.host.addEventListener("submit", this.handleSubmit);

    console.log(AUTH_SERVICE.isAuthorized());
  }

  handleClick(ev) {
		if (ev.target.id === "register-btn") {
			window.location.hash = "/register";
		}
	}

  handleSubmit(ev) {
    ev.preventDefault();

    const userData = {
      username: ev.target.username.value,
			password: ev.target.password.value
    };
    
    console.log(userData);

    AUTH_SERVICE.login(userData)
      .then(res => {
        if (res.answer.success) {
          console.log(AUTH_SERVICE.token);
          console.log(AUTH_SERVICE.claims);
          console.log(AUTH_SERVICE.isAuthorized());
					window.location.hash = "/my-info";
				}
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return `
      <form class="login-form">
        <label for="username">Username: </label>
        <input 
          name="username"
          class="username-fld" 
          id="username" 
          type="text" 
          minlength="2" 
          maxlength="24" 
          placeholder="Enter your name..." 
          required 
          value="">
        <label for="password">Password: </label>
        <input 
          name="password" 
          class="password-fld"
          id="password" 
          type="password" 
          minlength="8" 
          placeholder="Enter your password..." 
          required 
          value="">
        <button id="submit-btn" type="submit">Submit</button>
        <button id="register-btn" type="button">Register</button>
      </form>
    `;
  }
}

export default LoginComponent;