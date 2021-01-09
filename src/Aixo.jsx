import React, { useEffect } from "react";
import Axios from "axios";

function Aixo() {
  useEffect(function () {
    async function fetchData() {
      let data = await Axios.get("http://127.0.0.1/cdn/data.php");
      console.log(data);
    }
    fetchData();
  });

  return <React.Fragment>hello bro</React.Fragment>;
}
export default Aixo;
