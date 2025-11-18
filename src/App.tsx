import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useState } from "react"
import Notification from "./components/Notification"

export default function App() {
  const [notis, setNotis] = useState("")

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
      {notis && <Notification message={notis} onClose={() => setNotis("")} />}
    </>
  )
}

import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* resten av innholdet */}
      <Footer />
    </>
  );
}
