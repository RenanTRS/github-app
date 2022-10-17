import { Main } from 'components/Main'
import { Search } from 'components/Search'
import { AnimatePresence } from 'framer-motion'
import { useGetUser } from 'hooks/useGetUser'
import { Home } from 'pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'

export const AnimateRoutes = () => {
  const user = useGetUser()
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Main user={user} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}
