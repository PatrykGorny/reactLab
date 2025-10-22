import React from "react";
import MyContainer from "../component/MyContainer";
import PersonCard from "../component/PersonCard";
import { people } from "../module-data";

function Lab03() {
  return (
    <div className="p-3">
      <MyContainer element={PersonCard} data={people} />
    </div>
  );
}
export default Lab03;
