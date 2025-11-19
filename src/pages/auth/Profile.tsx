// 📄 src/pages/auth/Profile.tsx
import { getBruker } from "../../auth";

export default function Profile() {
  const bruker = getBruker();

  if (!bruker) {
    return (
      <div className="content-box">
        <h2>Min profil</h2>
        <p>Ingen brukerdata funnet. Du må være logget inn.</p>
      </div>
    );
  }

  return (
    <div className="content-box">
      <h2>Min profil</h2>
      <p><strong>E-post:</strong> {bruker.email}</p>
      <p><strong>Rolle:</strong> {bruker.role}</p>
    </div>
  );
}
