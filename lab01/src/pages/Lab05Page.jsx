import { Container, Table } from "react-bootstrap";
import { useReducer, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import TableHeader from "../component/TableHeader";
import TableRow from "../component/TableRow";
import TableDataReducer from "../data/TableDataReducer";

function Lab05() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [originalData, setOriginalData] = useState([]);
  const [sortedData, dispatch] = useReducer(TableDataReducer, []);
  const isLoading = !posts.length || !users.length || !comments.length;

  const tableData = isLoading
    ? []
    : posts.map((post) => ({
        user: users.find((user) => user.id === post.userId),
        post: post,
        comments: comments.filter((comment) => comment.postId === post.id),
      }));

  useEffect(() => {
    if (tableData.length > 0 && originalData.length === 0) {
      setOriginalData(tableData);
      dispatch({ type: "RESET", originalData: tableData });
    }
  }, [tableData.length]);

  const handleSort = (column, direction) => {
    if (direction === "reset") {
      dispatch({ type: "RESET", originalData: originalData });
    } else if (direction === "asc") {
      dispatch({ type: "SORT_ASC", column: column });
    } else if (direction === "desc") {
      dispatch({ type: "SORT_DESC", column: column });
    }
  };

  const displayData = sortedData.length > 0 ? sortedData : tableData;

  return (
    <Container className="mt-5" style={{ maxWidth: "1400px" }}>
      <div className="mb-4">
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#2c3e50",
            marginBottom: "8px",
          }}
        >
          📝 Lab05
        </h1>
      </div>

      {isLoading ? (
        <div
          className="text-center p-5"
          style={{
            background: "#f8f9fa",
            borderRadius: "12px",
            border: "2px dashed #dee2e6",
          }}
        >
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
          <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
            Pobieranie danych z serwera...
          </p>
        </div>
      ) : (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <Table hover responsive className="mb-0">
            <thead
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
              }}
            >
              <tr>
                <th style={{ padding: "16px", width: "35%" }}>
                  <TableHeader
                    title="Użytkownik"
                    column="user"
                    onSort={handleSort}
                  />
                </th>
                <th style={{ padding: "16px", width: "45%" }}>
                  <TableHeader
                    title="Tytuł posta"
                    column="post"
                    onSort={handleSort}
                  />
                </th>
                <th
                  style={{
                    padding: "16px",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <TableHeader
                    title="Liczba komentarzy"
                    column="comments"
                    onSort={handleSort}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((item) => (
                <TableRow key={item.post.id} item={item} />
              ))}
            </tbody>
          </Table>

          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderTop: "1px solid #dee2e6",
              textAlign: "center",
              color: "#6c757d",
            }}
          >
            Wyświetlono <strong>{displayData.length}</strong> postów
          </div>
        </div>
      )}
    </Container>
  );
}

export default Lab05;
