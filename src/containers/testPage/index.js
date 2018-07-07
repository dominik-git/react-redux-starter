import React from "react";
import { connect } from "react-redux";
import TestActions from "Actions/test.action";

const TestContainer = ({
  testState2, testState1, testAction1, testAction2,
}) => (
  <div>
    <div onClick={() => { testAction1("testString1"); }}>
      click for dispatch action 1
      {testState1 || " emptyString1"}
    </div>
    <div onClick={() => { testAction2("testString2"); }}>
      click for dispatch action 2
      {testState2 || " emptyString2"}
    </div>

  </div>

);
const mapStateToProps = state => ({
  testState1: state.testReducers.testState1,
  testState2: state.testReducers.testState2,
});
const mapDispatchToProps = dispatch => ({
  testAction1: randomString => dispatch(TestActions.testAction1(randomString)),
  testAction2: randomString => dispatch(TestActions.testAction2(randomString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
