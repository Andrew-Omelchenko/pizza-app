import { toHtml } from "../utils/helper";
import Component from "../framework/Component";
import Clock from "./Clock";
import Options from "./Options";

class HeaderComponent extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement("div");
		this.host.classList.add("header-container");

		this.clock = new Clock();
		this.options = new Options();
	}

	render() {

    const htmlString = `
			<div class="flex-container header">
				<div class="lbl" id="clock-placeholder"></div>
				<div class="flex-container center">
					<img class="logo" src="./img/pizza-cat.png" alt="logo">
				</div>
				<div class="lbl" id="options-placeholder"></div>
			</div>
		`;

		const node = toHtml(htmlString);
		node.getElementById("clock-placeholder").append(this.clock.update());
		node.getElementById("options-placeholder").append(this.options.update());

		return node;
	}
}

export default HeaderComponent;