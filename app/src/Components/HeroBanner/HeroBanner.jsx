// ========---======== < React > ========---======== //
import React from "react";

// ========---======== < React-Bootstrap > ========---======== //
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// ========---======== < Component-Style > ========---======== //
import Style from "./HeroBanner.module.css";

// ========---======== < Here-Banner > ========---======== //
import HeroImg from "../../Assets/Images/banner.png";

// ========---======== < React-Router-Dom > ========---======== //
import { useNavigate } from "react-router-dom";

// ========---======== < Component > ========---======== //
function HeroBanner() {
  // ========---======== < Component-Hooks > ========---======== //
  let navigate = useNavigate();

  // ========---======== < Component-JSX > ========---======== //
  return (
    <>
      <div className="container mt-5">
        <Card className={[Style.heroCard, "border-0"].join(" ")}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 col-6">
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    color: "#ff2625",
                  }}
                >
                  Fitness Club
                </Card.Text>
                <Card.Title className="my-4">
                  <h2>Sweat, Smile and Repeat</h2>
                </Card.Title>
                <Card.Text>Check out the most effective exercises</Card.Text>

                <Button
                  variant="danger"
                  onClick={() => {
                    window.scrollTo({ top: 1250, behavior: "smooth" });
                  }}
                >
                  Explore Exercises
                </Button>
                <Card.Text
                  className="mt-1"
                  style={{
                    position: "absolute",
                    fontSize: "150px",
                    fontWeight: "bold",
                    color: "#ff2625",
                    opacity: "50%",
                  }}
                >
                  Exercises
                </Card.Text>
              </Card.Body>
            </div>
            <div className="col-md-4 col-6">
              <Card.Img
                style={{
                  position: "relative",
                }}
                className={[Style.heroImg, "w-100"].join(" ")}
                variant="top"
                src={HeroImg}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default HeroBanner;
