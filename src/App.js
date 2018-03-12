import { bindAll } from "./utils/helper";
import Component from "./framework/Component";

class App extends Component {
  constructor({ host }) {
    super();

    // initialize state object
    this.state = {};

    // bindAll(
    //   this,  
    //   "handleError"
    // );

    this.host = host;

    // initialize components
    
  }

  render() {
    // const { } = this.state;

    // return [];
  }
}

export default App;
