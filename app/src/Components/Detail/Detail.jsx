// ========---======== < React > ========---======== //
import React, { useEffect, useState } from "react";

// ======= --- ======= <| React-Redux |> ======= --- ======= //
import { useDispatch, useSelector } from "react-redux";

// ========---======== < React-Bootstrap > ========---======== //
import Card from "react-bootstrap/Card";

// ========---======== < Images > ========---======== //
import bodyPartImg from "../../Assets/Icons/body-part.png";
import targetImg from "../../Assets/Icons/target.png";
import equipmentImg from "../../Assets/Icons/equipment.png";

// ========---======== < Component > ========---======== //
function Detail() {
  const dispatch = useDispatch();
  let gemData = useSelector((state) => state.gemData);
  const [items, setItems] = useState([]);
  // ========---======== < Component-State > ========---======== //

  // ========---======== < Component-Function > ========---======== //
  useEffect(() => {
    setItems([
      {
        icon: bodyPartImg,
        name: gemData.exercise.bodyPart,
      },
      {
        icon: targetImg,
        name: gemData.exercise.target,
      },
      {
        icon: equipmentImg,
        name: gemData.exercise.equipment,
      },
    ]);
  }, []);

  // ========---======== < Component-JSX> ========---======== //

  return (
    <>
      <div className="container mt-5">
        <Card className="border-0">
          <div className="row">
            <div className="col-md-6 text-center">
              <Card.Img
                style={{ border: "solid 3px #fff2bd", borderRadius: "10px" }}
                className="w-75"
                variant="top"
                src={gemData.exercise.gifUrl}
              />
            </div>
            <div className="col-md-6">
              <Card.Body>
                <Card.Title className="mb-5">
                  <h2 className="text-capitalize">{gemData.exercise.name}</h2>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Exercises keep you strong. {gemData.exercise.name} is one of
                  the best exercises to target your {gemData.exercise.target}.
                  <br />
                  It will help you improve your mood and gain energy.
                </Card.Text>

                <div className="mt-5">
                  {items.map((item, i) => {
                    return (
                      <div key={i} className="d-flex mt-4 align-items-center">
                        <img
                          src={item.icon}
                          alt=""
                          style={{
                            padding: "10px",
                            backgroundColor: "#fff2bd",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Detail;
