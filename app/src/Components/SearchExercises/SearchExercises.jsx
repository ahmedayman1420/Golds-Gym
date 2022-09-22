// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

// ========---======== < Util-Functions > ========---======== //
import { excuteFetchData } from "../../Utils/FetchData";

// ========---======== < Style > ========---======== //
import Style from "./SearchExercises.module.css";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ========---======== < Exercise-Actions > ========---======== //
import {
  setBodyPartsAction,
  setExercisesAction,
} from "../../Redux/Actions/ExerciseActions";

// ========---======== < Search-Regex > ========---======== //
export const validSearchWord = new RegExp(
  // Valid search word
  /^[A-Za-z]+$/
);

// ========---======== < Component > ========---======== //
function SearchExercises() {
  const dispatch = useDispatch();
  let gemData = useSelector((state) => state.gemData);

  // ========---======== < Component-State > ========---======== //
  const [searchWord, setSearchWord] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [exercises, setExercises] = useState([]);

  // ========---======== < Component-Function > ========---======== //

  const handleSearch = async (e) => {
    e.preventDefault();
    let data = gemData.exercises.filter((ex) => {
      return (
        ex.name.includes(searchWord) ||
        ex.equipment.includes(searchWord) ||
        ex.target.includes(searchWord) ||
        ex.target.includes(searchWord)
      );
    });
    setExercises(data);
    setSearchWord("");
  };

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

  useEffect(() => {
    getBodyParts();
    getExercises();
  }, []);

  console.log(gemData);
  console.log(exercises);
  return (
    // ========---======== < Component-JSX > ========---======== //
    <>
      <div className="mt-5 pt-5">
        <div className="overflow-auto mt-5 pt-5">
          <h2
            className="text-center"
            style={{
              fontWeight: "bold",
              fontSize: "48px",
            }}
          >
            Awesome Exercises You <br /> Sholud Know
          </h2>
          <Form onSubmit={handleSearch}>
            <Form.Group
              className="mb-3 w-75 m-auto mt-5 position-relative"
              controlId="formBasicEmail"
            >
              <Form.Control
                className={Style.searchInput}
                type="text"
                value={searchWord}
                placeholder="Search exercises"
                onChange={(e) => {
                  setSearchWord(e.target.value);
                }}
              />
              <Button
                variant="danger"
                type="submit"
                className="position-absolute"
                style={{
                  top: "0",
                  right: "0",
                }}
                disabled={!validSearchWord.test(searchWord) || waiting}
              >
                Search
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SearchExercises;
