import React, { useEffect } from "react";

const FavColor = () => {
  React.useEffect(() => {
    console.log("useeffect in FavColor..");
    return () => {
      console.log("FavColor cleanup..");
    };
  }, []);
  return <div style={{ color: "#00ff08" }}>Green</div>;
};
const FavNumber = () => {
  React.useEffect(() => {
    console.log("useeffect in FavNumber..");
    return () => {
      console.log("FavNumber cleanup..");
    };
  }, []);
  return <div>1000</div>;
};

const UseEffectEx = (props) => {
  const [showFavNum, setShowFavNum] = React.useState(true);
  const [showFavColor, setShowFavColor] = React.useState(false);
  // const [showFav, setShowFav] = React.useState(false);

  // useEffect(() => {
  //   console.log("showFav ", showFav);
  // }, [showFav, showFavNum]);

  return (
    <div>
      <h3>useEffect Example</h3>
      <p style={{ color: "#ff9900" }}>
        <strong>Notes:</strong> Check log for on mount and unmount of component.
        <br />
        Two different components are used to display fav color and fav number
        <br />
        The Effect Hook lets you perform side effects in function components
        <br />
        Data fetching, setting up a subscription, and manually changing the DOM
        in React components are all examples of side effects.
      </p>
      <button onClick={() => setShowFavColor(!showFavColor)}>
        Show/Hide Favorite Color
      </button>
      {showFavColor ? <FavColor /> : null}
      <br />
      <button onClick={() => setShowFavNum(!showFavNum)}>
        Show/Hide Favorite Number
      </button>
      {showFavNum ? <FavNumber /> : null}
    </div>
  );
};

export default UseEffectEx;
