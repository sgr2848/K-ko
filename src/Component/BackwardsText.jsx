import React, { Component } from "react";
import classes from "./css/Divs.module.css";
import { getByPlaceholderText } from "@testing-library/react";
const Checkbox = props => <input type="checkbox" value="rot 13" {...props} />;
class BackwardsText extends Component {
    state = {
        checked :false
    }
    render() {
        return (
          <div className={classes.div}>
                <Checkbox className={classes.Check}checked={this.state.checked} onChange={this.checkBox} />
            <label>rot 13</label>
            {this.state.checked ? this.props.rot_13 : this.props.Backwards}
          </div>);
    }

    checkBox = event => {        
        this.setState({ checked: event.target.checked });            
    }

   
}
export default BackwardsText;
