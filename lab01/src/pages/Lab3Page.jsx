import MyContainer from "../component/MyContainer";
import PersonCard from "../component/PersonCard";

function Lab03() {
  const Item = ({ name, id, rating }) => (
    <PersonCard
      style={{ width: `18rem` }}
      className="border mb-3 p-3 ms-3"
      key={id}
      id={id}
      rating={rating}
    >
      {name}
    </PersonCard>
  );

  return <MyContainer element={Item} />;
}
export default Lab03;
