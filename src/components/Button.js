import {Component} from 'react'


class Button extends Component {


  handleButtonClick = () => {
    this.props.handleClick(this.props.color)
  }

  render() {

    return (
      <button onClick={this.handleButtonClick}>Change Color</button>
    )
  }
}

export default Button