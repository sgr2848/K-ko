import React, { Component } from "react";
import classes from "./css/Divs.module.css";

class AllCaps extends Component {
  render() {
    return (<div className={classes.div}>
      {this.props.setAllCap}
    </div>);
  }
}
export default AllCaps;
