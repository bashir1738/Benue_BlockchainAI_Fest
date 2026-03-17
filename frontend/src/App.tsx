import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Register from './pages/Register'
import Apply from './pages/Apply'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminRegistrations from './pages/admin/AdminRegistrations'
import AdminHackathon from './pages/admin/AdminHackathon'
import AdminShowcase from './pages/admin/AdminShowcase'
import AdminSpeaker from './pages/admin/AdminSpeaker'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/apply" element={<Apply />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="/admin/registrations" element={<AdminRegistrations />} />
              <Route path="/admin/hackathon" element={<AdminHackathon />} />
              <Route path="/admin/showcase" element={<AdminShowcase />} />
              <Route path="/admin/speaker" element={<AdminSpeaker />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

