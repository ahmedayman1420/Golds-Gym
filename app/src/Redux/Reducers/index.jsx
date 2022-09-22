// ======= --- ======= <| Redux |> ======= --- ======= //
import { combineReducers } from "redux";

// ======= --- ======= <| Reducers |> ======= --- ======= //
import exerciseReducer from "./ExerciseReducer";

const reducers = combineReducers({
  gemData: exerciseReducer,
});

export default reducers;
