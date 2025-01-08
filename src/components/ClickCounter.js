import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { count } = props.counter;
  return (
    <div>
      <button onClick={props.incrementHandler}>{props.name} Clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter, 1);
