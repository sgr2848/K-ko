import React, { Component } from "react";

class IncreasedFont extends Component {
  state = {
    text: "HI",
    fontStrength: 40
  };
  textLookUp() {
    if (this.state.text.length === 0)
      return (
        <span className="badge m-2 badge-primary">Nothing there Bud! </span>
      );
    return this.displayText();
  }
  displayText() {
    return (
      <span
        className="badge m-2 badge-warning"
        style={{ fontSize: this.state.fontStrength }}
      >
        {this.state.text}
      </span>
    );
  }
  handleFontIncrement(some_digit) {
    this.setState({ fontStrength: this.state.fontStrength + some_digit });
  }
  handleResetEvent() {
    this.setState({ fontStrength: 30 });
  }
  render() {
    return (
      <div>
        {this.textLookUp()}
        <button onClick={() => this.handleFontIncrement(2.5)}>
          Press To Increase Font
        </button>
        <button onClick={() => this.handleResetEvent()}>Reset</button>
      </div>
    );
  }
}
export default IncreasedFont;
