// ========---======== < Actions-Strings > ========---======== //
import {
  SET_BODY_PARTS,
  SET_EXERCISES,
  SET_EXERCISE_DETAILS,
  SET_EXERCISE_VIDEOS,
  SET_SEARCH_RESULTS,
} from "./ActionStrings";

// ========---======== < Actions > ========---======== //
export const setBodyPartsAction = (data) => async (dispatch) => {
  dispatch({
    type: SET_BODY_PARTS,
    payload: data,
  });
};

export const setExercisesAction = (data) => async (dispatch) => {
  dispatch({
    type: SET_EXERCISES,
    payload: data,
  });
};

export const searchResultsAction = (data) => async (dispatch) => {
  dispatch({
    type: SET_SEARCH_RESULTS,
    payload: data,
  });
};

export const setExerciseDetailsAction = (data) => async (dispatch) => {
  dispatch({
    type: SET_EXERCISE_DETAILS,
    payload: data,
  });
};

export const setExerciseVideosAction = (data) => async (dispatch) => {
  dispatch({
    type: SET_EXERCISE_VIDEOS,
    payload: data,
  });
};
