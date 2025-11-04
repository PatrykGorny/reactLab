import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router-dom";

const emailField = "email";
const nameField = "name";
const birthDateField = "birthDate";
const phoneField = "phone";
const urlField = "url";
const photoField = "photo";

function AddForm() {
  const [errors, setErrors] = useState([]);
  const [isSendig, setSending] = useState(false);
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const birth = new Date(data.get(birthDateField));
    const now = new Date();
    if (birth > now) {
      setErrors([...errors, "Data urodzenia nie może być z przyszłości."]);
      return;
    }
    const newItem = {
      id: Date.now(),
      name: data.get(nameField),
      email: data.get(emailField),
      birthDate: data.get(birthDateField),
      phone: data.get(phoneField),
      url: data.get(urlField) || "",
      photo: data.get(photoField) || "",
      rating: 0,
    };

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);

    if (typeof dispatch === "function") {
      dispatch({ type: "add", item: newItem });
    }
    navigate("/lab03");

    for (let key of data.keys()) {
      e.target[key].value = "";
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="border p-4 rounded shadow"
        style={{
          minWidth: 320,
          background: "linear-gradient(180deg,#ffffff,#f7fbff)",
        }}
      >
        <h1 className="text-center">Dodaj nowego użytkownika</h1>

        <div className="text-danger">
          {errors.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>

        <Form className="text-primary" onSubmit={onSubmitFunction}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <FormControl
              required
              id={emailField}
              type="email"
              name={emailField}
              className="text-lg"
              placeholder="Wprowadź swój email"
            />
            <Form.Text className="text-muted">
              Wprowadź poprawny email
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor={nameField}>Imię</Form.Label>
            <FormControl
              required
              id={nameField}
              type="text"
              name={nameField}
              placeholder="Wprowadź swoje imię"
              maxLength={100}
            />
            <Form.Text className="text-muted">Wprowadź poprawne imię</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor={birthDateField}>Data urodzenia</Form.Label>
            <FormControl
              required
              id={birthDateField}
              type="date"
              name={birthDateField}
              placeholder="Wprowadź datę urodzenia"
            />
            <Form.Text className="text-muted">
              Wprowadź poprawną datę urodzenia
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor={phoneField}>Numer telefonu</Form.Label>
            <FormControl
              required
              id={phoneField}
              type="tel"
              name={phoneField}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder="123-456-789"
              maxLength={20}
            />
            <Form.Text className="text-muted">
              Wprowadź poprawny numer telefonu w formacie 123-456-789
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor={urlField}>Strona (URL)</Form.Label>
            <FormControl
              id={urlField}
              type="url"
              name={urlField}
              placeholder="https://example.com"
              maxLength={200}
            />
            <Form.Text className="text-muted">
              Opcjonalnie: adres strony
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor={photoField}>Photo URL</Form.Label>
            <FormControl
              id={photoField}
              type="url"
              name={photoField}
              placeholder="https://example.com/photo.jpg"
              maxLength={200}
            />
            <Form.Text className="text-muted">
              Opcjonalnie: link do zdjęcia
            </Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button
              disabled={isSendig}
              type="submit"
              variant="primary"
              size="lg"
              className="rounded-pill px-4 d-flex align-items-center shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Dodaj
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default AddForm;
