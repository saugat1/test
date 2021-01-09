import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Add from "@material-ui/icons/Add";

const Counter = () => {
    let [initial, updated] = useState([]);
    let [old, newItm] = useState("");

    function submited(event) {
        event.preventDefault();
        updated([...initial, old]);
        newItm("");
    } 
    function inputed(e) {
        newItm(e.target.value);
    }
    const Items = () => {
        return (
          <ul className="list-inline text-left">
            <RenderItems/>
          </ul>
        );
        
        
    }
    function deleteItem(e) {
        let id = e.currentTarget.parentElement.dataset.id;
        let item = initial[id];
        let newarr = initial.filter(function (ite, ind) {
            return ite !== item;
        })
        updated(newarr);
        
    }

    const RenderItems = () => {
        return initial.map(function (item, index) {
          return (
            <li className="list-inline-item w-100 p-1 d-flex justify-content-space-between" data-id={index} key={index}>
              <i
                className="fa fa-times-circle d-inline-block text-danger"
                aria-hidden="true"
                onClick={deleteItem}
                style={{ lineHeight: "24px", cursor: 'pointer' }}
              ></i>
              &nbsp;
              <span
                className="d-inline-block pl-4 font-weight-bold text-secondary"
                style={{ letterSpacing: "2.1px", fontFamily: "Lobster" }}
              >
                {item}
               
              </span>
            </li>
          );
        });
    };
    
  return (
    <div className="container text-center p-4">
      <div className="row w-100 mx-auto text-center p-5  ">
        <div className="w-100 col-12 col-md-5 p-3 mx-auto shadow rounded bg-white">
          <h2 className="p-2"> </h2>
          <form className="form-inline" onSubmit={submited}>
            <div className="form-group w-100">
              <Input
                type="text"
                onChange={inputed}
                color="primary"
                 name="item"  disableUnderline={true}
                placeholder="item name"
                aria-describedby="helpId"
                style={{ width: "82%" }}
                required
                value={old}
              />
              <Button type="submit" color="secondary" variant="contained">
                <Add ></Add>
              </Button>
            </div>
          </form>
          <div className="py-3 px-2">
            <span class="mi mi-face"></span>
            
            <Items />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
