import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  const WithCounter = (props) => {
    const [counter, setCount] = useState({ count: 0 });

    const incrementHandler = () => {
      setCount((prevState) => ({ count: prevState.count + incrementNumber }));
    };

    return (
      <WrappedComponent
        {...props}
        counter={counter}
        incrementHandler={incrementHandler}
      />
    );
  };
  return WithCounter;
};

export default withCounter;
