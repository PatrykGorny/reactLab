import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../data/AppContext";

function MyContainer({ element: Element, data }) {
  const context = useContext(AppContext);
  const state = data ?? context.items ?? [];

  return (
    <Container>
      <h1>Lab03</h1>
      <Row className="mt-4">
        {state.map((item, index) => (
          <Col
            key={item.id ?? index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-3"
          >
            <Element {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyContainer;
