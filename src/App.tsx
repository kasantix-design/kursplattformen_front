import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./router/AppRoutes"
import Navbar from "./components/Navbar"
import "./assets/style.css"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}
