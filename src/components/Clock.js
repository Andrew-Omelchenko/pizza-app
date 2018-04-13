import Component from "../framework/Component";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "00:00:00"
    };
    
    function align(smth) {
      if ( smth < 10) {
          return `0${smth.toString()}`;
      }
      return smth.toString();
    }
    
    function getCurrentTime() {
      const current = new Date();
      return `
          ${align(current.getHours())}:${align(current.getMinutes())}:${align(current.getSeconds())}
          `;
    }

    this.host = document.createElement("div");
    this.host.classList.add("clock");

    setInterval(() => {
      const time = getCurrentTime();
      this.updateState({ time });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return `
      <i class="fa fa-clock-o fa-fw label" aria-hidden="true"></i>
      <time datetime="00:00:00" id="clock">${time}</time>
    `;
  }
}

export default Clock;
