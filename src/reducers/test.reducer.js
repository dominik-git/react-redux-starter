import TestConstants from "Consts/test.const";

const initialState = {
  testState1: "",
  testState2: "",
};

function testReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TestConstants.TEST_CONST1:
      return Object.assign({}, state, {
        testState1: action.payload,
      });

    case TestConstants.TEST_CONST2:
      return Object.assign({}, state, {
        testState2: action.payload,
      });

    default:
      return state;
  }
}
export default testReducer;
