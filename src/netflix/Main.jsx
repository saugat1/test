import React from "react";
import Row from "./Row";
let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13];

function Main({ types }) {
  return (
    <div className="main">
      <div className="popular">
        <Row
          title="Popular on Netflix"
          test={test}
          big={true}
          url={types.trending}
        />
        <Row title="Netflix Originals" test={test} url={types.originals} />
        <Row title="Top Rated" test={test} url={types.toprated} />
        <Row title="Action Movies" test={test} url={types.action} />
        <Row title="Comedy Movies" test={test} url={types.comedy} />
        <Row title="Horror Movies" test={test} url={types.horror} />
        <Row title="Romantic Movies" test={test} url={types.romantic} />
        <Row title="Documentries" test={test} url={types.documentries} />
      </div>
    </div>
  );
}

export default Main;
