import React from "react";
import home from "../home.png";

export default function Home() {
  return (
    <>
      <div className="row align-items-center mt-4" id="home">
        <div className="col-md-6">
          <img src={home} className="w-100" alt="people"></img>
        </div>
        <div className="col-md-6">
          <div className="text-start">
            <div className="fs-2 fw-bold">Beyond Limit!</div>
            <div className="text-color">
              Supercharge your potential with cutting-edge technology. Embrace
              innovation, efficiency, and growth. Elevate your experience –
              because in this digital era, success is powered by technology.
              Unleash possibilities today!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
