import React, { Component } from "react";

class IncreasedFont extends Component {
  state = {
    text: "Hi",
    fontStrength: 40
  };

  render() {
    return (
      <div>
        {this.props.setLargerFont}
        <button onClick={this.props.increaseFontSize}> Press To Increase Font
        </button> 
        {<button onClick={ this.props.resetFontSize}>Reset</button> }
      </div>
    );
  }
}
export default IncreasedFont;
