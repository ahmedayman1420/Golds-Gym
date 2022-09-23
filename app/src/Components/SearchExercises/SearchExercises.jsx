// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// ========---======== < Style > ========---======== //
import Style from "./SearchExercises.module.css";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ========---======== < Exercises-Actions > ========---======== //
import { searchResultsAction } from "../../Redux/Actions/ExerciseActions";

// ========---======== < Search-Regex > ========---======== //
export const validSearchWord = new RegExp(
  // Valid search word
  /^[A-Za-z]+$/
);

// ========---======== < Component > ========---======== //
function SearchExercises() {
  const dispatch = useDispatch();
  // ========---======== < Component-State > ========---======== //
  const [searchWord, setSearchWord] = useState("");
  let gemData = useSelector((state) => state.gemData);

  // ========---======== < Component-Function > ========---======== //

  const handleSearch = async (e) => {
    e.preventDefault();
    let data = gemData.exercises.filter((ex) => {
      return (
        ex.name.includes(searchWord) ||
        ex.equipment.includes(searchWord) ||
        ex.target.includes(searchWord) ||
        ex.bodyPart.includes(searchWord)
      );
    });
    dispatch(searchResultsAction(data));

    window.scrollTo({ top: 1250, behavior: "smooth" });
  };

  return (
    // ========---======== < Component-JSX > ========---======== //
    <>
      <div className="mt-5pt-5">
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
                disabled={!validSearchWord.test(searchWord)}
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
