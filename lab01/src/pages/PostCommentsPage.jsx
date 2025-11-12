import { Container, Card, Badge, Button, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function PostCommentsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [comments] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post || comments.length === 0) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-5" style={{ maxWidth: "900px" }}>
      <Button
        variant="outline-secondary"
        onClick={() => navigate("/lab05")}
        className="mb-4"
      >
        ← Powrót do listy
      </Button>

      <Card
        className="mb-4 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <Card.Body>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            📝 {post.title}
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
            {post.body}
          </p>
          <Badge bg="light" text="dark" className="mt-3">
            {comments.length} komentarzy
          </Badge>
        </Card.Body>
      </Card>

      <h3 className="mb-3" style={{ color: "#2c3e50" }}>
        💬 Komentarze ({comments.length})
      </h3>

      <ListGroup>
        {comments.map((comment, index) => (
          <ListGroup.Item
            key={comment.id}
            className="mb-3 shadow-sm"
            style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 style={{ color: "#667eea", fontWeight: "600", margin: 0 }}>
                {comment.name}
              </h5>
              <Badge bg="secondary">#{index + 1}</Badge>
            </div>
            <p style={{ color: "#6c757d", marginBottom: "8px" }}>
              {comment.body}
            </p>
            <small style={{ color: "#7f8c8d" }}>
              ✉️ <strong>{comment.email}</strong>
            </small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default PostCommentsPage;
