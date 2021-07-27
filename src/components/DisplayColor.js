import { Component } from "react";

class DisplayColor extends Component {

  render() {

    return (
      <h1>The current color is {this.props.color}</h1>
    )
  }
}

export default DisplayColor