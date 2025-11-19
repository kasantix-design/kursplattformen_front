// 📄 src/auth.ts

type Bruker = {
  role: string
  email?: string
  [key: string]: any
}

export function getBruker(): Bruker | null {
  try {
    const json = localStorage.getItem("bruker")
    return json ? JSON.parse(json) as Bruker : null
  } catch (e) {
    console.warn("Ugyldig bruker-data i localStorage:", e)
    return null
  }
}

export function getToken(): string | null {
  return localStorage.getItem("token")
}

export function loggUt(): void {
  localStorage.removeItem("token")
  localStorage.removeItem("bruker")
  window.location.href = "/login"
}
