import { Button, Form, FormControl, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useData from "../hooks/useData";
import useDispatch from "../hooks/useDispatch";

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = useData();
  const dispatch = useDispatch();

  const itemId = Number(id);
  const item = items ? items.find((i) => i.id === itemId) : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: item || {},
  });

  useEffect(() => {
    if (item) reset(item);
  }, [item, reset]);

  const onSubmit = async (data) => {
    const birth = new Date(data.birthDate);
    if (birth > new Date()) {
      alert("Data urodzenia nie może być z przyszłości.");
      return;
    }

    const updated = {
      id: itemId,
      name: data.name,
      email: data.email,
      birthDate: data.birthDate,
      phone: data.phone,
      url: data.url || "",
      photo: data.photo || "",
      rating: data.rating ? Number(data.rating) : item?.rating || 0,
    };

    if (typeof dispatch === "function") {
      dispatch({ type: "edit", item: updated });
    }

    navigate("/lab03");
  };

  if (!item) return <p>Nie znaleziono rekordu do edycji.</p>;

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
        style={{ padding: "2rem" }}
      >
        <Card
          style={{
            width: 520,
            maxWidth: "95%",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          <Card.Body>
            <div className="text-center mb-3">
              <h4 className="mb-0">Edytuj użytkownika</h4>
              <small className="text-muted">ID: {itemId}</small>
            </div>

            <div className="text-danger mb-2">
              {Object.keys(errors).map((k) => (
                <p key={k} className="mb-0">
                  {errors[k]?.message}
                </p>
              ))}
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" value={itemId} {...register("id")} />

              <Form.Group className="mb-3">
                <Form.Label>Imię</Form.Label>
                <FormControl
                  {...register("name", {
                    required: "Imię jest wymagane",
                    maxLength: { value: 100, message: "Maks 100 znaków" },
                  })}
                  placeholder="Wpisz imię"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <FormControl
                  type="email"
                  {...register("email", {
                    required: "Email jest wymagany",
                    maxLength: { value: 100, message: "Maks 100 znaków" },
                  })}
                  placeholder="np. jan@domena.pl"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data urodzenia</Form.Label>
                <FormControl
                  type="date"
                  {...register("birthDate", {
                    required: "Data urodzenia jest wymagana",
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numer telefonu</Form.Label>
                <FormControl
                  {...register("phone", {
                    required: "Telefon jest wymagany",
                    pattern: {
                      value: /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/,
                      message: "Format 123-456-789",
                    },
                  })}
                  placeholder="123-456-789"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Strona (URL)</Form.Label>
                <FormControl
                  type="url"
                  {...register("url", {
                    maxLength: { value: 200, message: "Maks 200 znaków" },
                  })}
                  placeholder="https://"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <FormControl
                  type="url"
                  {...register("photo", {
                    maxLength: { value: 200, message: "Maks 200 znaków" },
                  })}
                  placeholder="https://..."
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="primary"
                  size="lg"
                >
                  Zapisz
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default EditForm;
