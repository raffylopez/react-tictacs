import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let utils = require('./utils')

const sum = utils.add(123,456)

console.log("The sum is: " + sum)

if (module.hot) {
  module.hot.accept();
}

class Child extends React.Component {
  render() {
    return <div><span>{this.props.text}</span><button onClick={this.props.onClick} disabled={!this.props.keepEnabled}>{this.props.label}</button></div>
  }
}

class Parent extends React.Component {
  handleClick() {
    let clicks = this.state.clicks
    let keepEnabled = clicks > 8? false : true
    this.setState({clicks: ++clicks, text: "Bar", keepEnabled: keepEnabled})
  }

  constructor(props) {
    super(props)
    this.state = {
      clicks: 0, 
      text: "Foo",
      keepEnabled: true,
    }
  }
  render() {
    return <div className="parent">Parent<Child onClick={ ()=>{this.handleClick()} } label={this.state.clicks} text={this.state.text} keepEnabled={this.state.keepEnabled}/></div>
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));

