import React from 'react'


class ColorChanger extends React.Component {


  state = {
    currentBackgroundColor: "red",
    somethingElse: true
  }


  handleClick = () => {
    console.log('color should change...')
    this.setState({
      currentBackgroundColor: "green"
    })
  }

  render() {

    const styles = {
      backgroundColor: this.state.currentBackgroundColor
    }

    return (
      <div>
        <p style={styles}>{this.props.title}</p>
        <button onClick={this.handleClick}>Change Color</button>
      </div>

    )
  }

}

export default ColorChanger