import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
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
    <Container className="mt-5" style={{ maxWidth: "800px" }}>
      <Button
        variant="outline-secondary"
        onClick={() => navigate("/lab05")}
        className="mb-4"
      >
        ← Powrót do listy
      </Button>

      <div className="text-center mb-4">
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "3rem",
            margin: "0 auto 16px",
          }}
        >
          {user.name.charAt(0)}
        </div>
        <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#2c3e50" }}>
          {user.name}
        </h1>
        <p style={{ color: "#7f8c8d", fontSize: "1.1rem" }}>@{user.username}</p>
      </div>

      <Card className="mb-3 shadow-sm">
        <Card.Header style={{ background: "#667eea", color: "white" }}>
          <strong>📧 Dane kontaktowe</strong>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Telefon:</strong> {user.phone}
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Strona WWW:</strong> {user.website}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow-sm">
        <Card.Header style={{ background: "#764ba2", color: "white" }}>
          <strong>🏠 Adres</strong>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Ulica:</strong> {user.address.street}, {user.address.suite}
          </p>
          <p>
            <strong>Miasto:</strong> {user.address.city}
          </p>
          <p>
            <strong>Kod pocztowy:</strong> {user.address.zipcode}
          </p>
          <p>
            <strong>Współrzędne:</strong> {user.address.geo.lat},{" "}
            {user.address.geo.lng}
          </p>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Header style={{ background: "#667eea", color: "white" }}>
          <strong>🏢 Firma</strong>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Nazwa:</strong> {user.company.name}
          </p>
          <p>
            <strong>Motto:</strong> <em>"{user.company.catchPhrase}"</em>
          </p>
          <p>
            <strong>Branża:</strong> {user.company.bs}
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserDetailsPage;
