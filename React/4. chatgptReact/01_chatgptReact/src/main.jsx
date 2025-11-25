import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'                 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)


/*
  REMEMBER: no other component will attach here directly other than (<App />) component

  if any other component is being created then that will attach into App.jsx file's (App()) functions under (return()) section like (<MyApp />)
*/