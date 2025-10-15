import ProfileParagraph from "./ProfileParagraph";

function ProfileCard(profile) {
  return (
    <div className="card shadow-sm p-3 mb-4 bg-light rounded">
      <h2 className="card-title mb-3 text-primary" style={{ marginTop: 0 }}>
        Profil użytkownika
      </h2>
      <div className="card-body p-0">
        <ProfileParagraph label="Imię" title={profile.name} />
        <ProfileParagraph label="Email" title={profile.email} />
        <ProfileParagraph label="Telefon" title={profile.phone} />
        <ProfileParagraph label="Data urodzin" title={profile.birthDate} />
      </div>
    </div>
  );
}

export default ProfileCard;
