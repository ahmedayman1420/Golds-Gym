// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ======= --- ======= <| React-Bootstrap |> ======= --- ======= //
import Card from "react-bootstrap/Card";

// ======= --- ======= <| React-Router-Dom |> ======= --- ======= //
import { NavLink } from "react-router-dom";

// ========---======== < Component > ========---======== //
function ExerciseVideo() {
  let gemData = useSelector((state) => state.gemData);

  // ========---======== < Component-State > ========---======== //

  // ========---======== < Component-Function > ========---======== //

  // ========---======== < Component-JSX > ========---======== //
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="can">
          <h2 className="text-capitalize">
            Watch
            <span
              style={{
                color: "#ff2526",
              }}
            >
              {" " + gemData.exercise.name + " "}
            </span>
            exercise videos
          </h2>
          <div className="row mt-3">
            {gemData.videos.slice(0, 3).map((video, i) => {
              return (
                <div key={i} className="col-lg-4 col-md-6 mb-3">
                  <Card>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                      target="_blanck"
                    >
                      <Card.Img
                        variant="top"
                        src={video.video.thumbnails[0].url}
                        className="w-100"
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        <h3>{video.video.title}</h3>
                      </Card.Title>
                      <Card.Text>{video.video.channelName}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExerciseVideo;
