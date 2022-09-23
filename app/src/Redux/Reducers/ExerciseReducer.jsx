// ========---======== < Actions-Strings > ========---======== //
import {
  SET_BODY_PARTS,
  SET_EXERCISES,
  SET_EXERCISE_DETAILS,
  SET_SEARCH_RESULTS,
  SET_EXERCISE_VIDEOS,
} from "../Actions/ActionStrings";

const exerciseReducer = (
  state = {
    bodyParts: [],
    exercises: [],
    searchResults: [],
    exercise: [],
    videos: [],
  },
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

    case SET_EXERCISE_DETAILS:
      return { ...state, exercise: action.payload };

    case SET_EXERCISE_VIDEOS:
      return { ...state, videos: action.payload };

    default:
      return state;
  }
};

export default exerciseReducer;
