import Component from "../framework/Component";

class FooterComponent extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement("div");
		this.host.classList.add("footer-container");
	}

	render() {

    return `
			<div class="flex-container footer">
				<span>
					Kottans, Kottans str., 1. <a href="Tel: 577-788-87">Tel.: 577-788-87</a> 
				</span>
				<span>
					Pizza Manager&copy;, 2018
				</span>
			</div>
    `;
  }
}

export default FooterComponent;
