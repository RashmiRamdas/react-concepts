import React from "react";

const memoizedvalueForA = () => {
  console.log("useMemo for A called");
};
const memoizedvalueForC = () => {
  console.log("useMemo for C called");
};
const UseMemoEx = (props) => {
  let c = 0;
  const [a, setA] = React.useState([1, 2, 3, 4]);
  const add = () => {
    let t = [...a];
    t.push(Math.random().toFixed(1));
    setA(t);
  };
  const incrementC = () => {
    console.log(c);
    c = c + 1;
  };

  const [b, setb] = React.useState(0);

  React.useMemo(() => memoizedvalueForA(a), [a]);
  React.useMemo(() => memoizedvalueForC(c), [c]);

  return (
    <div>
      <h3>useMemo Example</h3>
      <div style={{ color: "blue" }}>
        <strong>Notes:</strong> Here <strong>a</strong> is an array and{" "}
        <strong>b</strong> a number.
        <p>
          useMemo is invoked only on adding value to <strong>a</strong> since it
          depends on <strong>a</strong>.
        </p>
        <p>
          useMemo works on variables declared using useState only.
          <br />
          If variable is declared using const or let useMemo will not work as
          expected
        </p>
        <p>
          Here c is declared using let.. on incrementing c value is incremented
          but useMemo is not invoked.
          <br />
          Also DOM is not rerendered, so value is not updated on UI but
          incremented value is logged in console.
        </p>
      </div>
      <p>a: {a.join(", ")}</p>
      <p>b: {b}</p>
      <p>c: {c}</p>
      <button onClick={() => setb(b + 1)}>Increment b</button>
      <button onClick={add}>Add random value to array a</button>
      <button onClick={incrementC}>Increment c</button>
    </div>
  );
};

export default UseMemoEx;
