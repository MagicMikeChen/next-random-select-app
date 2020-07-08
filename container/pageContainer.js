import { connect } from "react-redux";
import {
  changeCountDownState,
  setResultName,
  resetAllStatus,
} from "../actions/action";
import Page from "../components/page";

const mapDispatchToProps = {
  changeCountDownState,
  setResultName,
  resetAllStatus,
};

const mapStateToProps = (state) => ({
  isCountDown: state.isCountDown,
  resultName: state.resultName,
  nameList: state.nameList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
