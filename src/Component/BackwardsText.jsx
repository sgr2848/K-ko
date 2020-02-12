import React, { Component } from "react";

class BackwardsText extends Component {
    state = {
        some_text :"Where are you running away"
    }
    render() {
        return (
            <div>
                {this.getText()}
            </div>
    );
    }
    getText() {
        if (this.state.some_text.length === 0){
              return (
                <span className="badge m-2 badge-primary">
                  Nothing there Bud!{" "}
                </span>
            );
        }
        else {
            return (<span className="badge m-2 badge-warning">{[...this.state.some_text].reverse().join("")}</span>);
        }
    }


}
export default BackwardsText;
