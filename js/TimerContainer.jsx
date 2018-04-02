import React from "react";

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1000
    };
  }
  startTimer = () => {
    this.setState(
      prevState => ({ time: prevState.time - 1 }),
      () => {
        console.log(this.state.time);
      }
    );
  };
  render() {
    return <Timer time={this.state.time} startTimer={this.startTimer} />;
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    };
  }
  render() {
    return (
      <div className="Timer">
        <h1>Time left {this.state.time} </h1>
        <input type="button" value="start" onClick={this.props.startTimer} />
      </div>
    );
  }
}

export default TimerContainer;
