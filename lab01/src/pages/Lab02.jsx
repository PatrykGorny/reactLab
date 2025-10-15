import { useParams } from "react-router";
import { people } from "../module-data";
import ProfileCard from "../component/ProfileCard";

function Lab02() {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="container mt-5 mx-auto" style={{ maxWidth: "300px" }}>
        Brak identyfikatora osoby.
      </div>
    );
  }

  const person = people.find((p) => String(p.id) === String(id));

  if (!person) {
    return (
      <div className="container mt-5 mx-auto" style={{ maxWidth: "400px" }}>
        Nie znaleziono osoby o tym identyfikatorze.
      </div>
    );
  }

  return (
    <div className="container mt-5 mx-auto" style={{ maxWidth: "600px" }}>
      <ProfileCard
        name={person.name}
        email={person.email}
        birthDate={person.birthDate}
        phone={person.phone}
      />
    </div>
  );
}

export default Lab02;
