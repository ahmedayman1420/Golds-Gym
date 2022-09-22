// ========---======== < Actions-Strings > ========---======== //
import { SET_BODY_PARTS, SET_EXERCISES } from "./ActionStrings";

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
