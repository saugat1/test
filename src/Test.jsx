import React from 'react';
import "./bootstrap/css/bootstrap.min.css";
import team1 from "./team-1.jpg";
import team2 from "./team-2.jpg";
import team3 from "./team-3.jpg";
import team4 from "./team-4.jpg";



function Test(props) {
  return (
    <>
      <div class="container">
        <div className="row">
          <div className="col-12 mx-auto text-center text-primary pb-3">
            <h3>Our Team</h3>
          </div>
          <div className="col-3 mx-auto my-5">
            <div class="card shadow">
              <img className="img-fluid" src={team1} alt="" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <small className="text-secondary">Seinour Web Developer</small>
                <p class="card-text">
                  thisis the cared tehsx ooremp pusumsee tha?
                </p>
                <button className="btn btn-primary btn-sm btn-block">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 mx-auto my-5">
            <div class="card shadow">
              <img className="img-fluid" src={team2} alt="" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <small className="text-secondary">Seinour Web Developer</small>
                <p class="card-text">
                  thisis the cared tehsx ooremp pusum dolor
                </p>
                <button className="btn btn-primary btn-sm btn-block">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 mx-auto my-5">
            <div class="card shadow">
              <img className="img-fluid" src={team3} alt="" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <small className="text-secondary">Seinour Web Developer</small>
                <p class="card-text">
                  thisis the cared tehsx ooremp pusum dolor s
                </p>
                <button className="btn btn-primary btn-sm btn-block">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 mx-auto my-5">
            <div class="card shadow">
              <img className="img-fluid" src={team4} alt="" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <small className="text-secondary">Seinour Web Developer</small>
                <p class="card-text">
                  thisis the cared tehsx ooremp pusum dolor sit ame
                </p>
                <button className="btn btn-primary btn-sm btn-block">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;