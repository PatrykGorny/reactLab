import React, { useReducer } from "react";
import AppReducer from "../data/AppReducer";

function MyContainer({ element: Element, data }) {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {state.map((item) => (
          <Element key={item.id} {...item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
export default MyContainer;
