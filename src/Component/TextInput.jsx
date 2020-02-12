import React, { Component } from 'react';


class TextInput extends Component{
    state = {
        count: 1,
        tags:['tags1','tags2','tags3']
    };

    style = {
        fontSize: 30,
        fontWeight:"bold"
    }
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no Tags</p>;
        return (
          <ul>
            {this.state.tags.map(tag => (
              <li key={tag} className={this.getBadgeClasses()}>
                {tag}
              </li>
            ))}
          </ul>
        );
    }
    render(){
        return (
            <div>
                {/* <span style={this.style} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>        */}
                <textarea placeholder="Need more input"></textarea>
              
            </div>);
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
    onClick() {
        let { count } = this.state;
        count = count + 1;
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
export default TextInput;