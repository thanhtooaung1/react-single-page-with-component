import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mb-4">
        <hr></hr>
        <div className="py-4">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <div className="row">
                <div className="col-md-4 text-start mb-3 footer-content">
                  <div className="fw-bold mb-2">Contact</div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      09253599770
                    </a>
                  </div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      thanhtooaung.dev@gmail.com
                    </a>
                  </div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      viber.com
                    </a>
                  </div>
                </div>
                <div className="col-md-4 text-start footer-content">
                  <div className="fw-bold mb-2">Support</div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      Therms of us
                    </a>
                  </div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      Help
                    </a>
                  </div>
                </div>
                <div className="col-md-4 text-start footer-content">
                  <div className="fw-bold mb-2">Social</div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      https://facebook.com
                    </a>
                  </div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      https://twitter.com
                    </a>
                  </div>
                  <div>
                    <a className="text-decoration-none text-color" href="#">
                      https://discord.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <small>&copy;2024 Beyond.All rights reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
