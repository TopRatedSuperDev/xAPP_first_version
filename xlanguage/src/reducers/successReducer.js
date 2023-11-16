import { GET_SUCCESS } from "../actions/types";

const initialState = {
  successMessage: "",
  successCnt: 0,
};
export default function successReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        ...state,
        successMessage: action.payload,
        successCnt: state.successCnt + 1,
      };
    default:
      return state;
  }
}