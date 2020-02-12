import React, { Component } from "react";
import classes from "./css/Divs.module.css";
class BackwardsText extends Component {

    render() {
        return <div className={classes.div}>{this.props.setTextBackwards}</div>;
    }
}
export default BackwardsText;
