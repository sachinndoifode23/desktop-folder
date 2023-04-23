import {
  dec,
  getAccUserFulfilled,
  getAccUserPending,
  getAccUserRejected,
  inc,
  incByAmt,
} from "../actions";

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserPending:
      return { ...state, pending: true };
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.payload, pending: false };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount ? state.amount - 1 : state };
    case incByAmt:
      return { amount: state.amount + parseInt(action.payload) };
    default:
      return state;
  }
}

export default accountReducer;
