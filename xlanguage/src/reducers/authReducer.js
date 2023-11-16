import { SET_CURRENT_USER } from "../actions/types";

  const isEmpty = require("is-empty");

  const initialState = {
    isAuthenticated: false,
    isActionEnabled:false,
    user: {},
  };

  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        const currentDate = new Date();
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          isActionEnabled: (action.payload.vipTime>currentDate.toISOString())?true:false,
          user: action.payload
        };
      default:
        return state;
    }
  }
