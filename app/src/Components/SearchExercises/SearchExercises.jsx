// ========---======== < React > ========---======== //
import React, { useState } from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// ========---======== < Util-Functions > ========---======== //
import { fetchData } from "../../Utils/FetchData";

// ========---======== < Style > ========---======== //
import Style from "./SearchExercises.module.css";

// ========---======== < Component > ========---======== //
function SearchExercises() {
  // ========---======== < Component-State > ========---======== //
  const [searchWord, setSearchWord] = useState("");

  // ========---======== < Component-Function > ========---======== //

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchWord.toLowerCase());
    console.log(process.env.React_App_RAPIDAPI_KEY);
    await fetchData();
  };
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
