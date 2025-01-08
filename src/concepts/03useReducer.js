import React, { useReducer, useRef } from "react";

const UseReducerEx = (props) => {
  const [count, dispatchCount] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "-":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, { id: Math.random().toFixed(3), name: action.name }];
      case "remove":
        return state.filter((_, index) => index !== action.index);
      default:
        return state;
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  return (
    <div>
      <h3>UseReducer Example</h3>
      <p style={{ color: "red" }}>Example 1:</p>
      <p>Count: {count}</p>
      <button onClick={() => dispatchCount("add")}>Increment</button>
      <button onClick={() => dispatchCount("-")}>Decrement</button>

      
      <p style={{ color: "red" }}>Example 2:</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch({ type: "remove", index })}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseReducerEx;
