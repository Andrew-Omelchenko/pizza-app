import Component from "../framework/Component";

class Login1 extends Component {
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

  componentReveivedProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return `
      <form class="login-form">
        <input name="login" placeholder="login" required class="login-fld" value="">
        <input name="password" type="password" placeholder="password" required class="password-fld" value="">
        <button class="submit-btn">Submit1</button>
      </form>
      <a href="#/login">Go to login</a>
    `;
  }
}

export default Login1;