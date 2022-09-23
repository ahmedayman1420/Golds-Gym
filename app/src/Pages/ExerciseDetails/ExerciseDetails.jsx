// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ========---======== < External-Components > ========---======== //
import Detail from "../../Components/Detail/Detail";
import ExerciseVideo from "../../Components/ExerciseVideo/ExerciseVideo";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ======= --- ======= <| React-Router-Dom |> ======= --- ======= //
import { useParams } from "react-router-dom";

// ======= --- ======= <| React-Bootstrap |> ======= --- ======= //
import Spinner from "react-bootstrap/Spinner";

// ========---======== < Exercise-Actions > ========---======== //
import {
  setExerciseDetailsAction,
  setExerciseVideosAction,
} from "../../Redux/Actions/ExerciseActions";

// ========---======== < Util-Functions > ========---======== //
import { excuteFetchData, excuteFetchVideos } from "../../Utils/FetchData";
import Exercises from "../../Components/Exercises/Exercises";

// ========---======== < Component > ========---======== //
function ExerciseDetails() {
  const dispatch = useDispatch();
  let gemData = useSelector((state) => state.gemData);
  let params = useParams();

  // ========---======== < Component-State > ========---======== //
  const [waiting, setWaiting] = useState(true);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  // ========---======== < Component-Function > ========---======== //
  useEffect(() => {
    let exercise = {};

    const fetchExerciseDetails = async () => {
      let url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`;
      const response = await excuteFetchData(url);
      dispatch(setExerciseDetailsAction(response.data));
      exercise = response.data;
    };

    const fetchExerciseVideos = async () => {
      let url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name}`;
      const response = await excuteFetchVideos(url);
      dispatch(setExerciseVideosAction(response.data.contents));
    };

    const fetchSimilarExercises = async () => {
      let url = `https://exercisedb.p.rapidapi.com/exercises/target/${exercise.target}`;
      let response = await excuteFetchData(url);
      setTargetMuscleExercises(response.data);

      url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercise.equipment}`;
      response = await excuteFetchData(url);
      setEquipmentExercises(response.data);
    };

    const excuteFetch = async () => {
      setWaiting(true);
      await fetchExerciseDetails();
      await fetchExerciseVideos();
      await fetchSimilarExercises();
      setWaiting(false);
    };

    excuteFetch();
  }, [params.id]);

  // ========---======== < Component-JSX> ========---======== //

  return (
    <>
      {waiting && (
        <>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "490px",
            }}
          >
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="dark" />
          </div>
        </>
      )}
      {!waiting && (
        <>
          <Detail />
          <ExerciseVideo />
          <Exercises
            data={targetMuscleExercises.slice(0, 9)}
            title={`Similar target muscle exercises`}
          />
          <Exercises
            data={equipmentExercises.slice(0, 9)}
            title={`Similar equipment exercises`}
          />
        </>
      )}
    </>
  );
}

export default ExerciseDetails;
