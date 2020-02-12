import React, { Component } from "react";

class AllCaps extends Component {
  state = {
    some_text: "Oh come on"
  };
  render() {
    return <div>{this.getAllCap()}</div>;
  }
  getAllCap() {
    if (this.state.some_text.length === 0){
      return (
        <span className="badge m-2 badge-primary">Nothing there Bud! </span>
          );
      }
    else {
        return (<span className="badge m-2 badge-warning">{this.state.some_text.toLocaleUpperCase()}</span>);
      }
  }
}
export default AllCaps;
