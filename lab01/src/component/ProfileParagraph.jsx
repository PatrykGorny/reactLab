function ProfileParagraph({ label, title }) {
  return (
    <div className="mb-2">
      <strong className="me-2">{label}:</strong>
      <span className="text-secondary">{title}</span>
    </div>
  );
}

export default ProfileParagraph;
