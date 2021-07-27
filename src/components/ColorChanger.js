import React from 'react'
import Button from './Button'
import DisplayColor from './DisplayColor'


class ColorChanger extends React.Component {

  state = {
    currentBackgroundColor: "grey",
  }

  handleClick = (color) => {
    console.log('color should change...')
    this.setState({
      currentBackgroundColor: color
    })
  }

  createButtons = () => {
    const colors = ["red", "orange", "green"]
    return colors.map( (color, i) => <Button 
                                      key={`button-${i}`} 
                                      color={color} 
                                      handleClick={this.handleClick}
                                      />)
  }

  render() {
    const styles = {
      backgroundColor: this.state.currentBackgroundColor
    }

    return (
      <div>
        <p style={styles} >{this.props.title}</p>
        <DisplayColor color={this.state.currentBackgroundColor}/>
        {this.createButtons()}
      </div>

    )
  }

}

export default ColorChanger