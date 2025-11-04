import React from "react";

function ProfileGrid({ columns = 3, children }) {
  const colSize = Math.floor(12 / columns);

  return (
    <div className="mt-4">
      <div className="row g-2">
        {React.Children.map(children, (child) => (
          <div className={`col-${colSize}`}>{child}</div>
        ))}
      </div>
    </div>
  );
}

export default ProfileGrid;
