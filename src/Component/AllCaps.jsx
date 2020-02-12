import React, { Component } from "react";

class AllCaps extends Component {
  state = {
    some_text: ""
  };
  render() {
    return <div>{this.getAllCap()}</div>;
  }
  getAllCap() {
    if (this.state.some_text.length === 0)
      return (
        <span className="badge m-2 badge-primary">Nothing there Bud! </span>
      );
  }
}
export default AllCaps;
