import { AnimatePresence } from 'framer-motion'
import { Home } from 'pages/Home'
import { Profile } from 'pages/Profile'
import { Route, Routes, useLocation } from 'react-router-dom'

export const AnimateRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}
