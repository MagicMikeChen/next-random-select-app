import { connect } from "react-redux";
import { changeCountDownState, setResultName } from "../actions/action";
import Result from "../components/result";

const mapDispatchToProps = { changeCountDownState, setResultName };

const mapStateToProps = (state) => ({
  resultName: state.resultName,
  isCountDown: state.isCountDown,
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
