import Component from "../framework/Component";
import { AUTH_SERVICE } from "../services/AuthService";

class Login extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("submit", this.handleSubmit);

    console.log(AUTH_SERVICE.isAuthorized());
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
					window.location.hash = '/user';
				}
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return `
      <h2>Login form</h2>
      <form class="login-form" id="login-form">
        <label for="username">Username: </label>
        <input 
          name="username"
          class="username-fld" 
          id="username" 
          placeholder="Enter your name..." 
          required 
          value="">
        <label for="password">Password: </label>
        <input 
          name="password" 
          class="password-fld"
          id="password" 
          type="password" 
          placeholder="Enter your password..." 
          required 
          value="">
        <p id="error-text"></p>
        <button class="submit-btn">Submit</button>
      </form>
      <a href="#/">Go to main</a>
    `;
  }
}

export default Login;