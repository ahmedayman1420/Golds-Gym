// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

// ========---======== < Fontawesome > ========---======== //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking } from "@fortawesome/free-solid-svg-icons";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ========---======== < Util-Functions > ========---======== //
import { excuteFetchData } from "../../Utils/FetchData";

// ========---======== < Component-Style > ========---======== //
import Style from "./HorizontalScroll.module.css";

// ========---======== < Exercise-Actions > ========---======== //
import { searchResultsAction } from "../../Redux/Actions/ExerciseActions";

// ========---======== < Component > ========---======== //

function HorizontalScrollExercises() {
  let gemData = useSelector((state) => state.gemData);
  const [bodyParts, setBodyParts] = useState([]);
  const dispatch = useDispatch();

  // ========---======== < Component-States > ========---======== //

  // ========---======== < Component-Functions > ========---======== //
  const separateBodyParts = () => {
    let size = 3;
    let tempArray = [];
    for (var i = 0; i < gemData.bodyParts.length + 1; i += size) {
      tempArray.push(["all", ...gemData.bodyParts].slice(i, i + size));
    }

    setBodyParts(tempArray);
  };

  useEffect(() => {
    separateBodyParts();
  }, []);

  const handleBodyPartSearch = async (bodyPart) => {
    if (bodyPart === "all") {
      dispatch(searchResultsAction(gemData.exercises));
      window.scrollTo({ top: 1250, behavior: "smooth" });
    } else {
      let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
      const response = await excuteFetchData(url);
      dispatch(searchResultsAction(response.data));
      window.scrollTo({ top: 1250, behavior: "smooth" });
    }
  };

  // ========---======== < Component-JSX > ========---======== //
  return (
    <>
      <Carousel fade className="mt-5 ">
        {bodyParts.map((subBodyParts, i) => {
          return (
            <Carousel.Item key={i}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center "
                gap={3}
              >
                <div className="container">
                  <div className="row w-100">
                    {subBodyParts.map((bodyPart, i) => {
                      return (
                        <div key={bodyPart} className="col-md-4 m-auto">
                          <Card
                            className="overflow-hidden"
                            onClick={() => {
                              handleBodyPartSearch(bodyPart);
                            }}
                          >
                            <Card.Body
                              className={[Style.cardItem, "text-center"].join(
                                " "
                              )}
                            >
                              <h2
                                style={{
                                  color: "#ff2625",
                                  fontSize: "56px",
                                }}
                              >
                                <FontAwesomeIcon icon={faBiking} />
                              </h2>
                              <h3 className="text-capitalize">{bodyPart}</h3>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Stack>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default HorizontalScrollExercises;
