import { Link } from "react-router-dom";
import { useState } from "react";

function TableRow({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <tr>
      <td>
        <Link
          to={`/lab05/users/${item.user?.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className="d-flex align-items-center"
            style={{
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                marginRight: "12px",
              }}
            >
              {item.user?.name?.charAt(0) || "?"}
            </div>
            <div>
              <div style={{ fontWeight: "500", color: "#667eea" }}>
                {item.user?.name || "Ładowanie..."} 🔗
              </div>
              <small className="text-muted">{item.user?.email || ""}</small>
            </div>
          </div>
        </Link>
      </td>

      <td>
        <div>
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              fontWeight: "500",
              color: "#2c3e50",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "4px 0",
            }}
          >
            <span style={{ marginRight: "8px", fontSize: "0.8rem" }}>
              {isExpanded ? "▼" : "▶"}
            </span>
            <span>{item.post.title}</span>
          </div>

          {isExpanded && (
            <div
              style={{
                background: "#f8f9fa",
                padding: "12px",
                borderRadius: "8px",
                marginTop: "8px",
                border: "1px solid #e9ecef",
              }}
            >
              <p
                style={{
                  margin: 0,
                  lineHeight: "1.6",
                  color: "#495057",
                }}
              >
                {item.post.body}
              </p>
            </div>
          )}
        </div>
      </td>

      <td className="text-center">
        <Link
          to={`/lab05/posts/${item.post.id}/comments`}
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "20px",
              background: item.comments.length > 5 ? "#e3f2fd" : "#f3e5f5",
              color: item.comments.length > 5 ? "#1976d2" : "#7b1fa2",
              fontWeight: "600",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {item.comments.length} 💬
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default TableRow;
