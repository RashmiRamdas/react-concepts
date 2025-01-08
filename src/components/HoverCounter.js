import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count } = props.counter;
  return <h3 onMouseLeave={props.incrementHandler}>Hovered {count} times</h3>;
};

export default withCounter(HoverCounter, 2);
