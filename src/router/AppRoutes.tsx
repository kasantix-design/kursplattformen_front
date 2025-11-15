import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/auth/Login"
import Profile from "../pages/auth/Profile"
import AdminDashboard from "../pages/dashboard/AdminDashboard"
import MemberDashboard from "../pages/dashboard/MemberDashboard"
import KursOversikt from "../pages/kurs/KursOversikt"
import KursDetaljer from "../pages/kurs/KursDetaljer"
import Leksjon from "../pages/kurs/Leksjon"
import Live from "../pages/undervisning/Live"
import Opptak from "../pages/undervisning/Opptak"
import Notater from "../pages/interaksjon/Notater"
import Blogg from "../pages/interaksjon/Blogg"
import Kommentarer from "../pages/interaksjon/Kommentarer"
import KjøpKurs from "../pages/betaling/KjøpKurs"
import Betalingsstatus from "../pages/betaling/Betalingsstatus"
import ProtectedRoute from "../components/ProtectedRoute"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profil" element={<Profile />} />

      {/* Dashboards */}
      <Route path="/admin" element={
        <ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/medlem" element={
        <ProtectedRoute role="medlem">
          <MemberDashboard />
        </ProtectedRoute>
      } />

      {/* Kurs og innhold */}
      <Route path="/kurs" element={<KursOversikt />} />
      <Route path="/kurs/:id" element={<KursDetaljer />} />
      <Route path="/kurs/:id/leksjon/:leksjonId" element={<Leksjon />} />

      {/* Undervisning */}
      <Route path="/undervisning" element={<Live />} />
      <Route path="/opptak" element={<Opptak />} />

      {/* Interaksjon */}
      <Route path="/notater" element={<Notater />} />
      <Route path="/blogg" element={<Blogg />} />
      <Route path="/kommentarer" element={<Kommentarer />} />

      {/* Betaling */}
      <Route path="/kjop" element={<KjøpKurs />} />
      <Route path="/betaling" element={<Betalingsstatus />} />
    </Routes>
  )
}
