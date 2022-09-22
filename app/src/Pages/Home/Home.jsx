// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ========---======== < Util-Functions > ========---======== //
import { excuteFetchData } from "../../Utils/FetchData";

// ========---======== < Exercise-Actions > ========---======== //
import {
  setBodyPartsAction,
  setExercisesAction,
} from "../../Redux/Actions/ExerciseActions";

// ======= --- ======= <| React-Bootstrap |> ======= --- ======= //
import Spinner from "react-bootstrap/Spinner";

// ========---======== < External-Components > ========---======== //
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import HorizontalScrollExercises from "../../Components/HorizontalScroll/HorizontalScroll";
import SearchExercises from "../../Components/SearchExercises/SearchExercises";
import Exercises from "../../Components/Exercises/Exercises";

// ========---======== < Component > ========---======== //
function Home() {
  const dispatch = useDispatch();
  const [waiting, setWaiting] = useState(true);
  let gemData = useSelector((state) => state.gemData);

  // ========---======== < Component-Functions > ========---======== //
  const getBodyParts = async () => {
    let url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
    const response = await excuteFetchData(url);
    dispatch(setBodyPartsAction(response.data));
  };

  const getExercises = async () => {
    let url = "https://exercisedb.p.rapidapi.com/exercises";
    const response = await excuteFetchData(url);
    dispatch(setExercisesAction(response.data));
  };

  const excute = async () => {
    setWaiting(true);
    await getExercises();
    await getBodyParts();
    setWaiting(false);
  };
  useEffect(() => {
    excute();
  }, []);

  return (
    <>
      {waiting && (
        <>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "500px",
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
          <HeroBanner />
          <SearchExercises />
          <HorizontalScrollExercises />
          <Exercises />
        </>
      )}
    </>
  );
}

export default Home;
