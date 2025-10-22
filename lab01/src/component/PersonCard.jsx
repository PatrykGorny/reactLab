import React from "react";
import RatingBar from "./RatingBar";

function PersonCard(props) {
  const {
    id,
    name,
    email,
    phone,
    birthDate,
    rating = 0,
    checked = false,
    dispatch,
  } = props;

  return (
    <div
      className="card mb-3 p-3 shadow-sm"
      style={{
        width: "18rem",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        backgroundColor: checked ? "#f8f9fa" : "#ffffff",
        marginRight: "16px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="card-body" style={{ padding: "0" }}>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <h5
            className="card-title"
            style={{
              margin: "0",
              color: "#2c3e50",
              fontWeight: "600",
              fontSize: "1.25rem",
              flex: "1 1 auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              paddingRight: "8px",
            }}
          >
            {name}
          </h5>

          <div style={{ flex: "0 0 auto", marginLeft: "8px" }}>
            <input
              type="checkbox"
              id={`check-${id}`}
              checked={!!checked}
              onChange={() => dispatch && dispatch({ type: "check", id })}
              style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
                margin: "0",
              }}
            />
          </div>
        </div>

        <div
          className="mb-2 d-flex justify-content-center"
          style={{
            padding: "12px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <RatingBar rate={rating} />
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-outline-primary" onClick={() => {}}>
            Edit
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => dispatch && dispatch({ type: "delete", id })}
          >
            Delete
          </button>

          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => dispatch && dispatch({ type: "rate", id })}
          >
            Rate
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
