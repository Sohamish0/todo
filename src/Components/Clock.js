import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date().toDateString() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    console.log(new Date());
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
