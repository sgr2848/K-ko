import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from "./Component/TextInput";
import BackWardsText from "./Component/BackwardsText";
import AllCaps from "./Component/AllCaps";
import IncreasedFont from "./Component/IncreasedFont";
import BackwardsText from './Component/BackwardsText';

class App extends Component {
  state = {
    some_text: '',
    fontStrength: 40
  };
  style = {
    fontSize :25
  }
  getAllCap() {
    if (this.state.some_text.length === 0) {
      return (
        <span className="badge m-2 badge-primary">Nothing there Bud! </span>
      );
    }
    else {
      return (<span className="badge m-2 badge-warning" style={this.style}>{this.state.some_text.toLocaleUpperCase()}</span>);
    }
  }
  getTextBackWards(){
    if (this.state.some_text.length === 0) {
      return (
        <span className="badge m-2 badge-primary">
          Nothing there Bud!{" "}
        </span>
      );
    }
    else {
      return (<span className="badge m-2 badge-warning" style={this.style}>{[...this.state.some_text].reverse().join("")}</span>);
    }
  }
  textLookUp() {
    if (this.state.some_text.length === 0)
      return (
        <span className="badge m-2 badge-primary">Nothing there Bud! </span>
      );
    else {
      return this.displayLargerText();
    }
  }
  displayLargerText() {
    return (
      <span
        className="badge m-2 badge-warning"
        style={{ fontSize: this.state.fontStrength }}
      >
        {this.state.some_text}
      </span>
    );
  }
  handleFontIncrementEvent = () => {
    if (this.state.some_text.length === 0) {
      //   pass
    } else {
      this.setState({ fontStrength: this.state.fontStrength + 2.5 });
    }

  }
  handleResetEvent = () => {
    this.setState({ fontStrength: 40 });
  }
  handleChange = (value) =>{
    this.setState({
      some_text: value
    });
  }
  updateString() {
    return <textarea type="text" value={this.state.some_text} onChange={(event) => this.handleChange(event.target.value)}></textarea>;
  }
  render() {
    return (
      <React.Fragment>
        <TextInput
          update={this.updateString()}
        />
        <BackwardsText
          setTextBackwards={this.getTextBackWards()} />
        <AllCaps
          setAllCap={this.getAllCap()} />
        <IncreasedFont
          setLargerFont={this.textLookUp()}
          increaseFontSize={this.handleFontIncrementEvent}
          resetFontSize={this.handleResetEvent}
        />

      </React.Fragment>
    );
  }
}

export default App;
