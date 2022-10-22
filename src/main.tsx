import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import './style/reset.scss'
import './style/globalStyle.scss'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
