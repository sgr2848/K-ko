import React, { Component } from "react";
import classes from "./css/Divs.module.css";
import reset from "./media/reset.svg";

class IncreasedFont extends Component {
  state = {
    text: "Hi",
    fontStrength: 40
  };

  render() {
    return (
      <div className={classes.div}>      
        <button
          onClick={this.props.increaseFontSize}
          className={classes.increaseFontButton}
        >
          <bold>↑ Font</bold>
        </button>
        <button
          onClick={this.props.resetFontSize}
          className={classes.resetButton}
        >
          <img src={reset} className={classes.resetAnim} alt="reset" />
        </button>{" "}
        {this.props.setLargerFont}
      </div>
    );
  }
}
export default IncreasedFont;
