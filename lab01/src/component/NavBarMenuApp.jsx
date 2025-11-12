import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarMenuApp() {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      style={{
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        width: "100vw",
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className="mx-auto"
          style={{ flexGrow: 1, textAlign: "center" }}
        >
          Frameworki frontendowe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "center" }}
        >
          <Nav className="mx-auto" style={{ gap: "1rem" }}>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/lab01">
              Laboratorium 1
            </Nav.Link>
            <Nav.Link as={Link} to="/lab02">
              Laboratorium 2
            </Nav.Link>
            <Nav.Link as={Link} to="/lab03">
              Laboratorium 3
            </Nav.Link>
            <Nav.Link as={Link} to="/lab04/add">
              Laboratorium 4
            </Nav.Link>
            <Nav.Link as={Link} to="/lab05">
              Laboratorium 5
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBarMenuApp;
