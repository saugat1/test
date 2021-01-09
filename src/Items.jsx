import DeleteOutline from "@material-ui/icons/DeleteOutline";
import React from "react";

function Items(props) {
  let AllItems = props.items;
  return AllItems.map(function (item, index) {
    return (
      <React.Fragment key={index}>
        <div className="col-6 col-lg-2 mt-2">
          <div className="card p-1 shadow-sm">
            <div className="card-body p-1">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <button
                className="btn btn-danger btn-sm float-right"
                data-id={index}
                onClick={props.deleteFunc}
              >
                <DeleteOutline
                  style={{ pointerEvents: "none" }}
                ></DeleteOutline>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });
}

export default Items;
