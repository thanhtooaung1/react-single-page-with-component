import React from "react";
import website from "../website.png";
import desktop from "../desktop.png";
import mobile from "../mobile.png";

export default function Service() {
  return (
    <>
      <div className="my-5" id="services">
        <div className="fs-4 fw-medium">Our Services</div>
        <div className="fw-light mt-2">
          Empowering progress through advanced technology solutions for a
          transformative tomorrow.
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div class="card text-start shadow">
              <div className="card-image-container d-flex justify-content-center align-items-center rounded-top-2">
                <img
                  src={website}
                  className="rounded-circle card-image"
                  alt="..."
                />
              </div>
              <div class="card-body card-body-color rounded-bottom-2">
                <h5 class="card-title-color">Website Design</h5>
                <p class="card-text text-color">
                  Seamless solutions for your business on the go – our web app
                  delivers efficiency, innovation, and unparalleled user
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div class="card text-start shadow">
              <div className="card-image-container d-flex justify-content-center align-items-center rounded-top-2">
                <img
                  src={mobile}
                  className="rounded-circle card-image"
                  alt="..."
                />
              </div>
              <div class="card-body card-body-color rounded-bottom-2">
                <h5 class="card-title-color">Mobile App</h5>
                <p class="card-text text-color">
                  Seamless solutions for your business on the go – our mobile
                  app delivers efficiency, innovation, and unparalleled user
                  experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div class="card text-start">
              <div className="card-image-container d-flex justify-content-center align-items-center rounded-top-2">
                <img
                  src={desktop}
                  className="rounded-circle card-image"
                  alt="..."
                />
              </div>
              <div class="card-body card-body-color rounded-bottom-2">
                <h5 class="card-title-color">Desktop App</h5>
                <p class="card-text text-color">
                  Seamless solutions for your business on the go – our desktop
                  app delivers efficiency, innovation, and unparalleled user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
