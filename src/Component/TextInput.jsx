import React, { Component } from 'react';


class TextInput extends Component{
    render(){
        return (
            <div>
                {/* <span style={this.style} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>        */}
                {this.props.update}
              
            </div>);
    }

}
export default TextInput;