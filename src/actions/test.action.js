import TestConstants from "Consts/test.const";

function testAction1(payload) {
  return {
    type: TestConstants.TEST_CONST1,
    payload,
  };
}
function testAction2(payload) {
  return {
    type: TestConstants.TEST_CONST2,
    payload,
  };
}
const TestActions = {
  testAction1,
  testAction2,
};
export default TestActions;
