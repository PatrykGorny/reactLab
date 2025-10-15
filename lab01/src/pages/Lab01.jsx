import ProfileCard from "../component/ProfileCard";
import ProfileGrid from "../component/ProfileGrid";
import { people } from "../module-data";

function Lab01() {
  return (
    <div className="container mt-5 mx-auto" style={{ maxWidth: "1200px" }}>
      <ProfileGrid columns={3}>
        {people.map((person) => (
          <ProfileCard
            key={person.email}
            name={person.name}
            email={person.email}
            birthDate={person.birthDate}
            phone={person.phone}
          />
        ))}
      </ProfileGrid>
    </div>
  );
}

export default Lab01;
