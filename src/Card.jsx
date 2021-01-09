import React from 'react';

function Card(props) {
    return (
        <div className="col-6 col-md-3">
            <div className="card my-2">
                <div className="card-header p-0 m-0">
                    <img
                        src={props.src}
                        alt={props.name}
                        className="img-fluid"
                        style={{ maxHeight: "200px", width: "100%" }}
                    ></img>
                </div>
                <div className="card-body bg-white">
                    <h6>{props.name}</h6>
                    <p> A film by {props.author}</p>
                    <a className="btn btn-primary btn-sm" href="something">
                        <i className="fa fa-play"></i>
          </a>{" "}
                    <a href="somttheing" className="btn btn-secondary btn-sm">
                       <i className="fa fa-download"></i> Download
          </a>
                </div>
            </div>
        </div>
    );
}

export default Card;