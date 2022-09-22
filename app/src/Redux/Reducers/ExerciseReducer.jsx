// ========---======== < Actions-Strings > ========---======== //
import {
  SET_BODY_PARTS,
  SET_EXERCISES,
  SET_SEARCH_RESULTS,
} from "../Actions/ActionStrings";

const exerciseReducer = (
  state = { bodyParts: [], exercises: [], searchResults: [] },
  action
) => {
  switch (action.type) {
    case SET_BODY_PARTS:
      return { ...state, bodyParts: action.payload };

    case SET_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
        searchResults: action.payload,
      };

    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
};

export default exerciseReducer;
