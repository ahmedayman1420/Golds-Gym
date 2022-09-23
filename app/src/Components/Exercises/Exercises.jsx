// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// ======= --- ======= <| Style |> ======= --- ======= //
import Style from "./Exercises.module.css";

// ======= --- ======= <| React-Router-Dom |> ======= --- ======= //
import { useNavigate } from "react-router-dom";

// ======= --- ======= <| External-Components |> ======= --- ======= //
import Pagination from "rc-pagination";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ========---======== < Component > ========---======== //
function Exercises({ data, title }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // ========---======== < Component-State > ========---======== //
  let [currentPage, setCurrentPage] = useState(1);
  // ========---======== < Component-Function > ========---======== //

  // ========---======== < Component-JSX> ========---======== //
  return (
    <>
      <div className="mt-5 py-5">
        <div className="container">
          <h2>{title}</h2>
          <div className="row mt-4">
            {data
              .slice((currentPage - 1) * 9, (currentPage - 1) * 9 + 9)
              .map((ex, i) => {
                return (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <Card className="border-0">
                      <div className="p-5">
                        <div
                          className={Style.ex}
                          style={{
                            borderTop: "solid #ff2526 5px",
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={ex.gifUrl}
                            className={["w-100", Style.cardImg].join(" ")}
                            loading="lazy"
                            onClick={() => {
                              navigate(`/exercise/details/${ex.id}`);
                            }}
                          />
                          <Card.Body>
                            <Button
                              variant="danger"
                              disabled
                              style={{
                                margin: "0 15px 0 0 ",
                              }}
                            >
                              {ex.bodyPart[0].toUpperCase() +
                                ex.bodyPart.slice(1)}
                            </Button>
                            <Button variant="warning" disabled>
                              {ex.target[0].toUpperCase() + ex.target.slice(1)}
                            </Button>

                            <Card.Title
                              className="mt-3 text-capitalize"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              {ex.name}
                            </Card.Title>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-center">
            {data.length > 9 && (
              <Pagination
                current={currentPage}
                defaultPageSize={9}
                pageSize={9}
                total={data.length}
                onChange={async (current, pageSize) => {
                  setCurrentPage(current);
                  window.scrollTo({ top: 1250, behavior: "smooth" });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercises;
