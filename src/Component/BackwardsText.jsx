import React, { Component } from "react";

class BackwardsText extends Component {

    render() {
        return (
            <div>
                {this.props.setTextBackwards}
            </div>
    );
    }

}
export default BackwardsText;
