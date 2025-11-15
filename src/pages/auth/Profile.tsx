export default function Profile() {
  const bruker = JSON.parse(localStorage.getItem("bruker") || "{}")

  return (
    <div className="content-box">
      <h2>Min profil</h2>
      <p><strong>E-post:</strong> {bruker?.email}</p>
      <p><strong>Rolle:</strong> {bruker?.role}</p>
    </div>
  )
}
