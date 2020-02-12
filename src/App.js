import React, { Component } from "react";
import logo from './logo.svg';
import classes from "./Component/css/Divs.module.css";
import "./App.css";
import TextInput from "./Component/TextInput";
import AllCaps from "./Component/AllCaps";
import IncreasedFont from "./Component/IncreasedFont";
import BackwardsText from "./Component/BackwardsText";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    some_text: "",
    fontStrength: 40
  };
  style = {
    fontSize: 25
  };
  getAllCap() {
    if (this.state.some_text.length === 0) {
      return (
        <p >Nothing there Bud! </p>
      );
    } else {
      return (
        <p  style={this.style}>
          {this.state.some_text.toLocaleUpperCase()}
        </p>
      );
    }
  }
  getTextBackWards() {
    if (this.state.some_text.length === 0) {
      return (
        <p >Nothing there Bud! </p>
      );
    } else {
      return (
        <p  style={this.style}>
          {[...this.state.some_text].reverse().join("")}
        </p>
      );
    }
  }
  textLookUp() {
    if (this.state.some_text.length === 0)
      return (
        <p >Nothing there Bud! </p>
      );
    else {
      return this.displayLargerText();
    }
  }
  displayLargerText() {
    return (
      <p        
        style={{ fontSize: this.state.fontStrength }}
      >
        {this.state.some_text}
      </p>
    );
  }
  handleFontIncrementEvent = () => {
    if (this.state.some_text.length === 0) {
      //   pass
    } else {
      this.setState({ fontStrength: this.state.fontStrength + 2.5 });
    }
  };
  handleResetEvent = () => {
    this.setState({ fontStrength: 40 });
  };
  handleValueChange = value => {
    this.setState({
      some_text: value
    });
  };
  updateString() {
    return (
      <textarea
        type="text"
        placeholder="Need more input"
        className={classes.textInput}
        value={this.state.some_text}
        onChange={event => this.handleValueChange(event.target.value)}
      ></textarea>
    );
  }
  render() {
    return (
      <React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="grid_container">
          <div className="grid_content">
            <TextInput update={this.updateString()} />
          </div>
          <div className="grid_content">
            <BackwardsText setTextBackwards={this.getTextBackWards()} />
          </div>
          <div className="grid_content">
            <AllCaps setAllCap={this.getAllCap()} />
          </div>
          <div className="grid_content">
            <IncreasedFont
              setLargerFont={this.textLookUp()}
              increaseFontSize={this.handleFontIncrementEvent}
              resetFontSize={this.handleResetEvent}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
