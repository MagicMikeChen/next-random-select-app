import React, { Component } from "react";
import Router from "next/router";

import Clock from "./clock";
import List from "./list";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      remainTime: 0,
    };

    this.interval;
  }

  componentDidMount() {
    const { resetAllStatus } = this.props;
    resetAllStatus();
  }

  handleCountDown = (e) => {
    const inputTime = parseInt(e.target.value);
    this.setState({
      input: inputTime,
    });
  };

  inputCheck = () => {
    if (this.state.input <= 59 && this.state.input >= 1) {
      return true;
    } else {
      return false;
    }
  };

  setMin = () => {
    if (this.inputCheck()) {
      this.setState({
        remainTime: this.state.input * 60,
        input: "",
      });
      this.countDown();
    } else {
      this.errorMessege();
    }
  };

  setSec = () => {
    if (this.inputCheck()) {
      this.setState({
        remainTime: this.state.input,
        input: "",
      });
      this.countDown();
    } else {
      this.errorMessege();
    }
  };

  errorMessege = () => {
    alert("輸入1-59的數字");
  };

  countDown = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        remainTime: (this.state.remainTime -= 1),
      });
      if (this.state.remainTime <= 0) {
        clearInterval(this.interval);
        this.openResultPage();
      }
    }, 1000);
  };

  openResultPage = () => {
    const resultName = this.randomSelect().name;
    this.props.setResultName(resultName);
    this.props.changeCountDownState();
    Router.push("/result_page");
  };

  randomSelect = () => {
    const { nameList } = this.props;
    return nameList[Math.floor(Math.random() * nameList.length)];
  };

  render() {
    const { nameList } = this.props;
    return (
      <>
        <div className={"container"}>
          <style jsx>{`
            .container {
              width: 65%;
              margin: 60px auto;
              display: flex;
            }

            .left-area {
              width: 100%;
            }

            .top-area {
              display: flex;
              justify-content: center;
            }

            .custom-button {
              width: 120px;
              border: 1px solid #333333;
              margin-left: 5px;
              display: flex;
              justify-content: center;
              padding: 10px 5px;
              color: black;
              font: 14px menlo, monaco, monospace;
              background-color: white;
            }
            .custom-button:hover {
              background-color: #dbdbdb;
              cursor: pointer;
            }

            .input-style {
              width: 190px;
              height: 35px;
            }

            @media (max-width: 768px) {
              .container {
                flex-direction: column;
                justify-content: center;
              }

              .right-area {
                display: flex;
                justify-content: center;
                margin-top: 30px;
              }

              .top-area {
                width: 200px;
                margin: 0 auto;
                flex-direction: column;
              }

              .custom-button {
                margin: 5px auto;
              }

              .input-style {
                margin-bottom: 5px;
              }
            }
          `}</style>
          <div className={"left-area"}>
            <div className={"top-area"}>
              <input
                className={"input-style"}
                type="number"
                value={this.state.input}
                onChange={this.handleCountDown}
                pattern="[0-9]*"
                placeholder="輸入倒數分鐘"
              ></input>
              <button
                className={"custom-button"}
                type="submit"
                onClick={this.setMin}
              >
                開始倒數
              </button>
              <button
                className={"custom-button"}
                type="submit"
                onClick={this.setSec}
              >
                Debug Mode
              </button>
            </div>

            <Clock remainTime={this.state.remainTime} />
          </div>
          <div className={"right-area"}>
            <List nameList={nameList} />
          </div>
        </div>
      </>
    );
  }
}
