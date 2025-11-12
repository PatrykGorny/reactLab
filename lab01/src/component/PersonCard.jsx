import RatingBar from "./RatingBar";

import { useNavigate } from "react-router";
import useData from "../hooks/useData";
import useDispatch from "../hooks/useDispatch";

function PersonCard(props) {
  const {
    id,
    rating: propRating = undefined,
    checked: propChecked = undefined,
    dispatch: propDispatch = undefined,
  } = props;
  const items = useData();
  const ctxDispatch = useDispatch();
  const item = items.find((it) => it.id === id) || {};
  const isChecked =
    typeof propChecked !== "undefined" ? propChecked : !!item.check;
  const dispatch =
    typeof propDispatch === "function" ? propDispatch : ctxDispatch;
  const navigate = useNavigate();

  const currentRate =
    typeof propRating !== "undefined" ? propRating : item.rating || 0;

  return (
    <div
      className="card mb-3 p-3 shadow-sm"
      style={{
        width: "18rem",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        backgroundColor: isChecked ? "#f8f9fa" : "#ffffff",
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
            {item.name}
          </h5>

          <div style={{ flex: "0 0 auto", marginLeft: "8px" }}>
            <input
              type="checkbox"
              id={`check-${id}`}
              checked={!!isChecked}
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
            marginTop: "16px",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <RatingBar rate={currentRate} />
          </div>
        </div>

        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "16px" }}
        >
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => {
              navigate(`/lab04/edit/${id}`);
            }}
          >
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
            onClick={() => {
              const newRate = currentRate < 10 ? currentRate + 1 : 0;
              if (typeof dispatch === "function") {
                dispatch({ type: "rate", id, value: newRate });
              }
            }}
          >
            Rate
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
