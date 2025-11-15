export function getBruker() {
  const json = localStorage.getItem("bruker")
  return json ? JSON.parse(json) : null
}

export function getToken() {
  return localStorage.getItem("token")
}

export function loggUt() {
  localStorage.removeItem("token")
  localStorage.removeItem("bruker")
  window.location.href = "/login"
}
