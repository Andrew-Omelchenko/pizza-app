import Component from "../framework/Component";
import { AUTH_SERVICE } from "../services/AuthService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("focus", this.handleFocus, true);
    this.host.addEventListener("submit", this.handleSubmit);
  }

  handleFocus(ev) {
    if (ev.target.id === "username" || ev.target.id === "password") {
      document.getElementById("alert-placeholder").innerHTML = "";
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const userData = {
      username: ev.target.username.value,
			password: ev.target.password.value
    };

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
        document.getElementById("alert-placeholder").innerHTML = err.answer.error;
      });
  }

  render() {
    return `
      <form class="login-form">
        <p class="alert-txt" id="alert-placeholder"></p>
        <label for="username">Username: </label>
        <input 
          name="username"
          class="fld" 
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
          class="fld"
          id="password" 
          type="password" 
          minlength="8" 
          placeholder="Enter your password..." 
          required 
          value="">
        <button class="btn btn-wide" id="submit-btn" type="submit">Submit</button>
      </form>
    `;
  }
}

export default LoginComponent;