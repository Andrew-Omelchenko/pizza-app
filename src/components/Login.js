import Component from "../framework/Component";

class Login extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("login-container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    console.log(ev);
  }

  render() {
    return `
      <h2>Login form</h2>
      <form class="login-form">
        <input name="login" placeholder="login" required class="login-fld" value="">
        <input name="password" type="password" placeholder="password" required class="password-fld" value="">
        <button class="submit-btn">Submit</button>
      </form>
      <a href="#/">Go to main</a>
    `;
  }
}

export default Login;