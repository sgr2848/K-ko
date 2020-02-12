import React, { Component } from 'react';
import classes from "./css/Divs.module.css";

class TextInput extends Component{
    render(){
        return <div className={classes.divInput}>{this.props.update}</div>;
    }
}
export default TextInput;