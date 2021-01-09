import React from "react";
import "./bootstrap/css/bootstrap.min.css";

function Bnavbar() {
  return (
    <>
      <div className="container-fluid bg-light px-5">
        <div className="row">
          <div className="col-12">
            <nav class="navbar navbar-expand-lg navbar-light  px-5">
              <a class="navbar-brand" href="http://localhost:3000/">
                NIR TECHNICAL
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="http://data.json">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://data.json">
                      Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://data.json">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://data.json">
                      Mango
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://data.json">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bnavbar;
