import React, { useState } from "react";
import Form from "./Form";
import Items from "./Items";

function ToDo() {
  let [item, updateItem] = useState({ title: "", description: "" });
  let [items, updateItems] = useState([]);
  function changed(event) {
    let value = event.target.value;
    let itemName = event.target.name;
    if (itemName === "description") {
      updateItem({
        ...item,
        description: value,
      });
    } else {
      updateItem({
        ...item,
        title: value,
      });
    }
  }
  function clicked(event) {
    event.preventDefault();
    updateItems([...items, item]);
    updateItem({ title: "", description: "" });
  }

  function deleteFunc(e) {
    let id = e.target.previousElementSibling.innerText;
    let filtered = [...items].filter(function (item, index) {
      return id !== item.description;
    });
    updateItems(filtered);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <Form changed={changed} submited={clicked} items={item}></Form>
          </div>
        </div>
        <br />
      </div>
      <div className="container-fluid p-3">
        <div className="row mt-5">
          <Items items={items} deleteFunc={deleteFunc}></Items>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ToDo;
