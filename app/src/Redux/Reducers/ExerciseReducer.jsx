// ========---======== < Actions-Strings > ========---======== //
import { SET_BODY_PARTS, SET_EXERCISES } from "../Actions/ActionStrings";

const exerciseReducer = (state = { bodyParts: [], exercises: [] }, action) => {
  switch (action.type) {
    case SET_BODY_PARTS:
      return { ...state, bodyParts: action.payload };

    case SET_EXERCISES:
      return { ...state, exercises: action.payload };

    default:
      return state;
  }
};

export default exerciseReducer;
