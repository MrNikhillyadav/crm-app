import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
          domain="dev-0yxkiwxtpmi4idyy.us.auth0.com"
          clientId="gbE8Zfa4cy3ZZltTTdWXsFqfqLkJJ9hn"
          authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
    </Auth0Provider>,
  </StrictMode>,
)
