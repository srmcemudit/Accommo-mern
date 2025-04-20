import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/Store.js";
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
