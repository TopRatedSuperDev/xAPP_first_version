import { GET_ERRORS } from "../actions/types";

const initialState = {
  errorsMessage: "",
  errorsCnt: 0,
};
export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errorsMessage: action.payload,
        errorsCnt: state.errorsCnt + 1,
      };
    default:
      return state;
  }
}