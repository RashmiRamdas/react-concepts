import React from "react";
import ClickCounter from "../components/ClickCounter";
import HoverCounter from "../components/HoverCounter";

const hocEx = (props) => {
  return (
    <div>
      <h3>HOC Example</h3>
      <p style={{ color: "#9131e8fc" }}>
        <strong>Notes:</strong> HOC is a function that takes a component and
        returns a new component.
        <br />
        <code style={{ color: "#ff7070fc" }}>
          const NewComponent = hoc(originalComponent);
          <br />
          const IronMan = withSuit(TonyStark);
        </code>
        <br />
      </p>
      <ClickCounter name={"Rashmi"}></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
};

export default hocEx;
