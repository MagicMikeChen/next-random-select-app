import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
  formatTime = () => {
    const { remainTime } = this.props;
    const timer = moment().startOf("day").add(remainTime, "second");
    if (remainTime >= 3600) {
      return timer.format("HH:mm:ss");
    }
    return timer.format("mm:ss");
  };

  render() {
    return (
      <div className={""}>
        {this.formatTime()}
        <style jsx>{`
          div {
            width: 150px;
            margin: 1rem auto;
            padding: 1rem;
            display: block;
            color: #82fa58;
            font: 50px menlo, monaco, monospace;
            background-color: #000;
          }
        `}</style>
      </div>
    );
  }
}
