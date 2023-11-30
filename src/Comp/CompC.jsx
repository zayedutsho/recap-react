import { Data, Data2 } from "../App";

import { useContext } from "react";

const CompC = () => {
  const name = useContext(Data);
  const age = useContext(Data2);
  return (
    <div>
      {/* <Data.Consumer>
        {(name) => {
          return <h1>This is {name}</h1>;
        }}
      </Data.Consumer> */}

      <h1>
        My name is {name}and my age is {age}
      </h1>
    </div>
  );
};

export default CompC;
