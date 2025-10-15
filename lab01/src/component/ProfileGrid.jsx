function ProfileGrid({ columns, children }) {
  const colClass = `col-${12 / columns}`;

  return (
    <div className="row g-4 justify-content-center w-auto mx-auto">
      {children.map((child, idx) => (
        <div className={colClass} key={idx}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default ProfileGrid;
