// ========---======== < React > ========---======== //
import React from "react";

// ========---======== < Images > ========---======== //
import logo from "../../Assets/Images/Logo-1.png";

// ========---======== < Component > ========---======== //
function Footer() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{
          backgroundColor: "#fff3f4",
        }}
      >
        <img src={logo} alt="" />
        <h4 className='mt-3'>Made by someone at CMP</h4>
      </div>
    </>
  );
}

export default Footer;
