import Component from "../framework/Component";

class DashboardComponent extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement("div");
		this.host.classList.add("dashboard-container");
	}

	render() {

		let ordersString = "";

		for (let i = 1; i < 10; i++) {
			ordersString += `
				<div class="flex-container center padded position-${i}">
          <div class="img-container">
            <img class="tile" src="img/${i}.png" alt="image">
          </div>
          <div class="details">
            <div class="flex-container">
              <time datetime="00:00:00">XX:XX:XX</time>
              <span>#1</span>
            </div> 
            <div class="flex-container">
              <strong>ETA: 1min</strong>
              <strong><money>$32.00</money></strong>
            </div>      
          </div>
        </div>
			`;
		}

		return `
      <div class="flex-container center">
        <button class="btn btn-ordinary" type="button">
          <i class="fa fa-plus fa-fw label" aria-hidden="true"></i>
          ADD NEW PIZZA
        </button>
      </div>
			<div class="wrapper">
				${ordersString}
			</div>
    `;
	}
}

export default DashboardComponent;