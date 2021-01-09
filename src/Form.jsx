import { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

function Form(props) {
  let [expanded, updateExpan] = useState(false);
  function updateExpand() {
    updateExpan(true);
  }

  return (
    <div className="card w-100 shadow-sm mt-4">
      <div className="card-body">
        <form onSubmit={props.submited}>
          <Input
            type="text"
            name="title"
            placeholder="note title"
            className="w-100"
            onChange={props.changed}
            autoComplete="off"
            required={true}
            value={props.items.title}
            onClick={updateExpand}
          />
          {expanded ? (
            <Input
              type="text"
              name="description"
              placeholder="note description"
              className="w-100 mt-3"
              onChange={props.changed}
              autoComplete="off"
              required={true}
              value={props.items.description}
            />
          ) : null}
          {expanded ? (
            <Button
              color="primary"
              variant="contained"
              className="mt-3 float-right"
              type="submit"
            >
              <Add></Add>
            </Button>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Form;
