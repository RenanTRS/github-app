import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToggleProvider } from './context/ToggleProvider'
import { Reset } from './style/Reset'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToggleProvider>
      <Reset />
      <App />
    </ToggleProvider>
  </React.StrictMode>
)
