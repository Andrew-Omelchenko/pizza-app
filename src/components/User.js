import Component from "../framework/Component";

class User extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('user-container');
	}

	render() {
    return `
      <h2>User form</h2>
    `;
  }
}

export default User;