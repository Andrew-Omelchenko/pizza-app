import Component from "../framework/Component";

class App extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('app-container');
	}

	render() {
		return `
      <h2>App form</h2>
    `;
	}
}

export default App;