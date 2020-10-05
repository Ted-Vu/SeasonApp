import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMsg: "",
    };

    // a callback here
  }

  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMsg: err.message,
        });
      }
    );
  }

  componentDidUpdate() {}

  render() {
    if (this.state.lat !== null) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.errorMsg !== "") {
      return <div>Error Message: {this.state.errorMsg}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
