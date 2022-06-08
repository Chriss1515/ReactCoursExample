import React from "react";

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  thick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.MyTimer = setInterval(() => this.thick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.MyTimer);
  }
  render() {
    return (
      <div>
        <p>Le temps est {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
