import { DropdownButton, Dropdown } from "react-bootstrap";

function TableHeader({ title, column, onSort }) {
  const getSortLabels = () => {
    if (column === "comments") {
      return { asc: "0-9", desc: "9-0" };
    }
    return { asc: "A-Z", desc: "Z-A" };
  };

  const labels = getSortLabels();

  const handleClick = (direction) => {
    console.log(
      `TableHeader kliknięty: column=${column}, direction=${direction}`
    );
    onSort(column, direction);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>{title}</span>
      <DropdownButton
        id={`dropdown-${column}`}
        title="⋮"
        size="sm"
        variant="outline-secondary"
        className="ms-2"
      >
        <Dropdown.Item onClick={() => handleClick("asc")}>
          📈 Sortuj {labels.asc}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("desc")}>
          📉 Sortuj {labels.desc}
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => handleClick("reset")}>
          🔄 Resetuj
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default TableHeader;
